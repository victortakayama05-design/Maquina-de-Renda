-- Tabela de Perfis e Configurações da Máquina de Renda
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  full_name TEXT,
  document_type TEXT,
  document TEXT,
  company_name TEXT,
  openai_key TEXT,
  evolution_url TEXT,
  evolution_master_key TEXT,
  war_room_group_id TEXT,
  product_name TEXT,
  product_link TEXT,
  commission TEXT,
  niche TEXT,
  report_time TEXT,
  report_frequency TEXT,
  report_data_types TEXT,
  plan_tier TEXT DEFAULT 'free',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  subscription_status TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Segurança de Nível de Linha (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários veem o próprio perfil" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Usuários atualizam o próprio perfil" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

-- Função gatilho para copiar dados do Cadastro (auth.users) para a tabela Profiles
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id, full_name, document_type, document, company_name
  )
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'document_type',
    NEW.raw_user_meta_data->>'document',
    NEW.raw_user_meta_data->>'company_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Disparador oficial
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
