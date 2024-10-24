PGDMP             
        	    |            postgres    15.7    15.7 ^    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3560                        2615    16398    pgagent    SCHEMA        CREATE SCHEMA pgagent;
    DROP SCHEMA pgagent;
                postgres    false            �           0    0    SCHEMA pgagent    COMMENT     6   COMMENT ON SCHEMA pgagent IS 'pgAgent system tables';
                   postgres    false    8                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2                        3079    16399    pgagent 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgagent WITH SCHEMA pgagent;
    DROP EXTENSION pgagent;
                   false    8            �           0    0    EXTENSION pgagent    COMMENT     >   COMMENT ON EXTENSION pgagent IS 'A PostgreSQL job scheduler';
                        false    3            �           1247    24799    aluno_detalhe    DOMAIN     �   CREATE DOMAIN public.aluno_detalhe AS character varying NOT NULL
	CONSTRAINT aluno_detalhe_check CHECK (((VALUE)::text !~ '\s'::text));
 "   DROP DOMAIN public.aluno_detalhe;
       public          postgres    false            �           1247    24811    xsigla    DOMAIN     �   CREATE DOMAIN public.xsigla AS character varying(2)
	CONSTRAINT xsigla_check CHECK (((VALUE)::text = ANY ((ARRAY['MA'::character varying, 'PA'::character varying, 'TO'::character varying])::text[])));
    DROP DOMAIN public.xsigla;
       public          postgres    false                       1255    33030 (   add_produtos(character varying, integer) 	   PROCEDURE     �   CREATE PROCEDURE public.add_produtos(IN p_produtos_nome character varying, IN p_categoria_id integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO tbprodutos(produtos_nome, categoria_id)
VALUES(p_produtos_nome, p_categoria_id);
END;
$$;
 e   DROP PROCEDURE public.add_produtos(IN p_produtos_nome character varying, IN p_categoria_id integer);
       public          postgres    false                       1255    16577 !   atualizar_preco(integer, numeric) 	   PROCEDURE     )  CREATE PROCEDURE public.atualizar_preco(IN p_cod_produto integer, IN p_novo_preco numeric)
    LANGUAGE plpgsql
    AS $$
BEGIN
UPDATE Produtos
SET preco = p_novo_preco
WHERE cod_produto = p_cod_produto;
RAISE NOTICE 'Pre‡o do produto % atualizado para %', p_cod_produto,
p_novo_preco;
END;
$$;
 Z   DROP PROCEDURE public.atualizar_preco(IN p_cod_produto integer, IN p_novo_preco numeric);
       public          postgres    false                       1255    16568 ?   cadastra_pessoa(character varying, character varying, smallint) 	   PROCEDURE        CREATE PROCEDURE public.cadastra_pessoa(IN p_nome character varying, IN p_sobrenome character varying, IN p_idade smallint)
    LANGUAGE plpgsql
    AS $$
BEGIN
	INSERT INTO pessoas(nome, sobrenome, idade)
	VALUES (p_nome, p_sobrenome, p_idade); 
END;
$$;
 {   DROP PROCEDURE public.cadastra_pessoa(IN p_nome character varying, IN p_sobrenome character varying, IN p_idade smallint);
       public          postgres    false                       1255    16578     consultar_estoque_baixo(integer) 	   PROCEDURE     p  CREATE PROCEDURE public.consultar_estoque_baixo(IN p_limite_estoque integer)
    LANGUAGE plpgsql
    AS $$
DECLARE resultado RECORD;
BEGIN
FOR resultado in
SELECT cod_produto, nome_produto, qtde_estoque
FROM Produtos
WHERE qtde_estoque < p_limite_estoque
LOOP
RAISE NOTICE 'Produto: %, Estoque: % ', resultado.nome_produto,
resultado.qtde_estoque;
END LOOP;
END;
$$;
 L   DROP PROCEDURE public.consultar_estoque_baixo(IN p_limite_estoque integer);
       public          postgres    false                       1255    16591    delete_aluno(integer) 	   PROCEDURE     �   CREATE PROCEDURE public.delete_aluno(IN p_id integer)
    LANGUAGE plpgsql
    AS $$
BEGIN
DELETE FROM ALUNOSBCC24
WHERE ID = p_id;
END;
$$;
 5   DROP PROCEDURE public.delete_aluno(IN p_id integer);
       public          postgres    false                       1255    16592    get_alunos() 	   PROCEDURE       CREATE PROCEDURE public.get_alunos()
    LANGUAGE plpgsql
    AS $$
BEGIN
--Exibe todos os registros da tabela ALUNOSBCC24
PERFORM format('ID: %s, NOME: %s, SOBRENOME: %s, EMAIL: %s, CPF: %s, VR_BOLSA: %s',
ID, NOME, SOBRENOME, EMAIL, CPF, VR_BOLSA)
FROM ALUNOSBCC24;
END;
$$;
 $   DROP PROCEDURE public.get_alunos();
       public          postgres    false            	           1255    16579 M   insere_atualiza(integer, character varying, text, numeric, smallint, numeric) 	   PROCEDURE       CREATE PROCEDURE public.insere_atualiza(IN cod integer, IN prod character varying, IN descr text, IN valor numeric, IN qtde smallint, IN desc_perc numeric)
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO produtos(cod_produto, nome_produto, descricao, preco, qtde_estoque)
VALUES (cod, prod, descr, valor, qtde);
UPDATE produtos SET preco = preco * (100 - desc_perc) / 100;
END;
$$;
 �   DROP PROCEDURE public.insere_atualiza(IN cod integer, IN prod character varying, IN descr text, IN valor numeric, IN qtde smallint, IN desc_perc numeric);
       public          postgres    false                       1255    16569 D   inserir_produto(integer, character varying, text, numeric, smallint) 	   PROCEDURE     �  CREATE PROCEDURE public.inserir_produto(IN p_cod_produto integer, IN p_nome_produto character varying, IN p_descricao text, IN p_preco numeric, IN p_qtde_estoque smallint)
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO Produtos(cod_produto, nome_produto, descricao, preco, qtde_estoque)
VALUES (p_cod_produto, p_nome_produto, p_descricao, p_preco, p_qtde_estoque);
RAISE NOTICE 'Produto % cadastrado com sucesso.', p_nome_produto;
END;
$$;
 �   DROP PROCEDURE public.inserir_produto(IN p_cod_produto integer, IN p_nome_produto character varying, IN p_descricao text, IN p_preco numeric, IN p_qtde_estoque smallint);
       public          postgres    false            
           1255    16590 a   insert_aluno(character varying, character varying, character varying, character varying, numeric) 	   PROCEDURE     \  CREATE PROCEDURE public.insert_aluno(IN p_nome character varying, IN p_sobrenome character varying, IN p_email character varying, IN p_cpf character varying, IN p_vr_bolsa numeric)
    LANGUAGE plpgsql
    AS $$
BEGIN
INSERT INTO ALUNOSBCC24 (NOME, SOBRENOME, EMAIL, CPF, VR_BOLSA)
VALUES(p_nome, p_sobrenome, p_email, p_cpf, p_vr_bolsa);
END;
$$;
 �   DROP PROCEDURE public.insert_aluno(IN p_nome character varying, IN p_sobrenome character varying, IN p_email character varying, IN p_cpf character varying, IN p_vr_bolsa numeric);
       public          postgres    false                       1255    16593    iscpfvalid(character varying)    FUNCTION     �  CREATE FUNCTION public.iscpfvalid(cpf character varying) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
DECLARE
cleaned_cpf VARCHAR(11);  -- CPF deve ser composto por 11 d¡gitos
 verifying_digit_one INTEGER;
verifying_digit_two INTEGER;
total INTEGER;
counter INTEGER;
multiplier INTEGER;
BEGIN
-- Remove pontos e tra‡os do CPF
 cleaned_cpf := REPLACE(REPLACE(cpf, '.', ''), '-', '');

-- Verifica se o CPF tem 11 d¡gitos
IF LENGTH(cleaned_cpf) != 11 THEN
RETURN FALSE;
END IF;

-- Verifica se todos os d¡gitos sÆo iguais (CPFs inv lidos)
IF cleaned_cpf IN ('00000000000', '11111111111', '22222222222',
'33333333333', '44444444444', '55555555555',
'66666666666', '77777777777', '88888888888',
'99999999999') THEN
RETURN FALSE;
END IF;

-- Obt‚m os d¡gitos verificadores
verifying_digit_one := SUBSTRING(cleaned_cpf FROM 10 FOR 1)::INTEGER;
verifying_digit_two := SUBSTRING(cleaned_cpf FROM 11 FOR 1)::INTEGER;

-- C lculo do primeiro d¡gito verificador
total := 0;
multiplier := 10;
FOR counter IN 1..9 LOOP
 total := total + SUBSTRING(cleaned_cpf FROM counter FOR 1)::INTEGER * multiplier;
 multiplier := multiplier - 1;
END LOOP;
IF (MOD(total, 11) < 2 AND verifying_digit_one != 0) OR
(MOD(total, 11) >= 2 AND verifying_digit_one != 11 - MOD(total, 11)) THEN
RETURN FALSE;
END IF;

-- C lculo do segundo d¡gito verificador
total := 0;
multiplier := 11;
FOR counter IN 1..10 LOOP
total := total + SUBSTRING(cleaned_cpf FROM counter FOR 1)::INTEGER * multiplier;
multiplier := multiplier - 1;
END LOOP;
IF (MOD(total, 11) < 2 AND verifying_digit_two != 0) OR
(MOD(total, 11) >= 2 AND verifying_digit_two != 11 - MOD(total, 11)) THEN
RETURN FALSE;
END IF;

-- Se todos os testes foram passados, o CPF ‚ v lido
RETURN TRUE;
END;
$$;
 8   DROP FUNCTION public.iscpfvalid(cpf character varying);
       public          postgres    false                       1255    16594    validate_cpf()    FUNCTION       CREATE FUNCTION public.validate_cpf() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
--Verifica se o CPF ‚ v lido usando a fun‡Æo isCpfValid
IF NOT isCpfValid(NEW.CPF) THEN
RAISE EXCEPTION 'CPF inv lido: %', NEW.CPF;
END IF;
RETURN NEW;
END;
$$;
 %   DROP FUNCTION public.validate_cpf();
       public          postgres    false            �            1259    24802 
   agenda_alu    TABLE     �   CREATE TABLE public.agenda_alu (
    aluno_id integer NOT NULL,
    pre_nome public.aluno_detalhe,
    sobre_nome public.aluno_detalhe,
    notas_alcancadas integer NOT NULL,
    email character varying NOT NULL,
    uf_alu public.xsigla
);
    DROP TABLE public.agenda_alu;
       public         heap    postgres    false    926    926    933            �            1259    24801    agenda_alu_aluno_id_seq    SEQUENCE     �   CREATE SEQUENCE public.agenda_alu_aluno_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.agenda_alu_aluno_id_seq;
       public          postgres    false    239            �           0    0    agenda_alu_aluno_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.agenda_alu_aluno_id_seq OWNED BY public.agenda_alu.aluno_id;
          public          postgres    false    238            �            1259    16583    alunosbcc24    TABLE     �   CREATE TABLE public.alunosbcc24 (
    id integer NOT NULL,
    nome character varying(50),
    sobrenome character varying(50),
    email character varying(100),
    cpf character varying(14),
    vr_bolsa numeric(10,2)
);
    DROP TABLE public.alunosbcc24;
       public         heap    postgres    false            �            1259    16582    alunosbcc24_id_seq    SEQUENCE     �   CREATE SEQUENCE public.alunosbcc24_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.alunosbcc24_id_seq;
       public          postgres    false    237            �           0    0    alunosbcc24_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.alunosbcc24_id_seq OWNED BY public.alunosbcc24.id;
          public          postgres    false    236            �            1259    24813    municipios_cadastrados    TABLE     �   CREATE TABLE public.municipios_cadastrados (
    cidade character varying NOT NULL,
    estado public.xsigla,
    cep character varying(9),
    CONSTRAINT municipios_cadastrados_cep_check CHECK (((cep)::text ~ '^\d{5}-?\d{3}$'::text))
);
 *   DROP TABLE public.municipios_cadastrados;
       public         heap    postgres    false    933            �            1259    16565    pessoas    TABLE     y   CREATE TABLE public.pessoas (
    nome character varying(20),
    sobrenome character varying(40),
    idade smallint
);
    DROP TABLE public.pessoas;
       public         heap    postgres    false            �           0    0    TABLE pessoas    ACL     8   GRANT ALL ON TABLE public.pessoas TO lima_20221bcc0002;
          public          postgres    false    234            �            1259    16570    produtos    TABLE     �   CREATE TABLE public.produtos (
    cod_produto integer NOT NULL,
    nome_produto character varying(30),
    descricao text,
    preco numeric,
    qtde_estoque smallint
);
    DROP TABLE public.produtos;
       public         heap    postgres    false            �           0    0    TABLE produtos    ACL     9   GRANT ALL ON TABLE public.produtos TO lima_20221bcc0002;
          public          postgres    false    235            �            1259    33051    tbapartamentos    TABLE     d   CREATE TABLE public.tbapartamentos (
    apartamento_id integer NOT NULL,
    vr_aluguel integer
);
 "   DROP TABLE public.tbapartamentos;
       public         heap    postgres    false            �            1259    33050 !   tbapartamentos_apartamento_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tbapartamentos_apartamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.tbapartamentos_apartamento_id_seq;
       public          postgres    false    248            �           0    0 !   tbapartamentos_apartamento_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.tbapartamentos_apartamento_id_seq OWNED BY public.tbapartamentos.apartamento_id;
          public          postgres    false    247            �            1259    33031    tbcategorias    TABLE     n   CREATE TABLE public.tbcategorias (
    categoria_id integer,
    categoria_nome character varying NOT NULL
);
     DROP TABLE public.tbcategorias;
       public         heap    postgres    false            �            1259    33070 	   tbcidades    TABLE     u   CREATE TABLE public.tbcidades (
    cidade_id integer,
    cidade_nome character varying(50),
    pais_id integer
);
    DROP TABLE public.tbcidades;
       public         heap    postgres    false            �            1259    33061    tbcontinentes    TABLE     u   CREATE TABLE public.tbcontinentes (
    continente_id integer NOT NULL,
    continente_nome character varying(50)
);
 !   DROP TABLE public.tbcontinentes;
       public         heap    postgres    false            �            1259    33060    tbcontinentes_continente_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tbcontinentes_continente_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.tbcontinentes_continente_id_seq;
       public          postgres    false    251            �           0    0    tbcontinentes_continente_id_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.tbcontinentes_continente_id_seq OWNED BY public.tbcontinentes.continente_id;
          public          postgres    false    250            �            1259    33037 	   tbmedicos    TABLE     �   CREATE TABLE public.tbmedicos (
    medico_id integer NOT NULL,
    primeiro_nome character varying NOT NULL,
    ultimo_nome character varying NOT NULL
);
    DROP TABLE public.tbmedicos;
       public         heap    postgres    false            �            1259    33036    tbmedicos_medico_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tbmedicos_medico_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.tbmedicos_medico_id_seq;
       public          postgres    false    245            �           0    0    tbmedicos_medico_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.tbmedicos_medico_id_seq OWNED BY public.tbmedicos.medico_id;
          public          postgres    false    244            �            1259    33045    tbpacientes    TABLE     �   CREATE TABLE public.tbpacientes (
    paciente_id integer,
    primeiro_nome character varying NOT NULL,
    ultimo_nome character varying NOT NULL
);
    DROP TABLE public.tbpacientes;
       public         heap    postgres    false            �            1259    33067    tbpaises    TABLE     v   CREATE TABLE public.tbpaises (
    pais_id integer,
    pais_nome character varying(50),
    continente_id integer
);
    DROP TABLE public.tbpaises;
       public         heap    postgres    false            �            1259    33057 	   tbpessoas    TABLE     v   CREATE TABLE public.tbpessoas (
    pessoas_id integer,
    email character varying(50),
    max_vraluguel integer
);
    DROP TABLE public.tbpessoas;
       public         heap    postgres    false            �            1259    33022 
   tbprodutos    TABLE     �   CREATE TABLE public.tbprodutos (
    produtos_id integer NOT NULL,
    produtos_nome character varying NOT NULL,
    categoria_id integer
);
    DROP TABLE public.tbprodutos;
       public         heap    postgres    false            �            1259    33021    tbprodutos_produtos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tbprodutos_produtos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.tbprodutos_produtos_id_seq;
       public          postgres    false    242            �           0    0    tbprodutos_produtos_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.tbprodutos_produtos_id_seq OWNED BY public.tbprodutos.produtos_id;
          public          postgres    false    241            
           2604    24805    agenda_alu aluno_id    DEFAULT     z   ALTER TABLE ONLY public.agenda_alu ALTER COLUMN aluno_id SET DEFAULT nextval('public.agenda_alu_aluno_id_seq'::regclass);
 B   ALTER TABLE public.agenda_alu ALTER COLUMN aluno_id DROP DEFAULT;
       public          postgres    false    239    238    239            	           2604    16586    alunosbcc24 id    DEFAULT     p   ALTER TABLE ONLY public.alunosbcc24 ALTER COLUMN id SET DEFAULT nextval('public.alunosbcc24_id_seq'::regclass);
 =   ALTER TABLE public.alunosbcc24 ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236    237                       2604    33054    tbapartamentos apartamento_id    DEFAULT     �   ALTER TABLE ONLY public.tbapartamentos ALTER COLUMN apartamento_id SET DEFAULT nextval('public.tbapartamentos_apartamento_id_seq'::regclass);
 L   ALTER TABLE public.tbapartamentos ALTER COLUMN apartamento_id DROP DEFAULT;
       public          postgres    false    248    247    248                       2604    33064    tbcontinentes continente_id    DEFAULT     �   ALTER TABLE ONLY public.tbcontinentes ALTER COLUMN continente_id SET DEFAULT nextval('public.tbcontinentes_continente_id_seq'::regclass);
 J   ALTER TABLE public.tbcontinentes ALTER COLUMN continente_id DROP DEFAULT;
       public          postgres    false    250    251    251                       2604    33040    tbmedicos medico_id    DEFAULT     z   ALTER TABLE ONLY public.tbmedicos ALTER COLUMN medico_id SET DEFAULT nextval('public.tbmedicos_medico_id_seq'::regclass);
 B   ALTER TABLE public.tbmedicos ALTER COLUMN medico_id DROP DEFAULT;
       public          postgres    false    244    245    245                       2604    33025    tbprodutos produtos_id    DEFAULT     �   ALTER TABLE ONLY public.tbprodutos ALTER COLUMN produtos_id SET DEFAULT nextval('public.tbprodutos_produtos_id_seq'::regclass);
 E   ALTER TABLE public.tbprodutos ALTER COLUMN produtos_id DROP DEFAULT;
       public          postgres    false    241    242    242            �          0    16400    pga_jobagent 
   TABLE DATA           I   COPY pgagent.pga_jobagent (jagpid, jaglogintime, jagstation) FROM stdin;
    pgagent          postgres    false    219   �v       �          0    16409    pga_jobclass 
   TABLE DATA           7   COPY pgagent.pga_jobclass (jclid, jclname) FROM stdin;
    pgagent          postgres    false    221   �v       �          0    16419    pga_job 
   TABLE DATA           �   COPY pgagent.pga_job (jobid, jobjclid, jobname, jobdesc, jobhostagent, jobenabled, jobcreated, jobchanged, jobagentid, jobnextrun, joblastrun) FROM stdin;
    pgagent          postgres    false    223   w       �          0    16467    pga_schedule 
   TABLE DATA           �   COPY pgagent.pga_schedule (jscid, jscjobid, jscname, jscdesc, jscenabled, jscstart, jscend, jscminutes, jschours, jscweekdays, jscmonthdays, jscmonths) FROM stdin;
    pgagent          postgres    false    227   7w       �          0    16495    pga_exception 
   TABLE DATA           J   COPY pgagent.pga_exception (jexid, jexscid, jexdate, jextime) FROM stdin;
    pgagent          postgres    false    229   Tw       �          0    16509 
   pga_joblog 
   TABLE DATA           X   COPY pgagent.pga_joblog (jlgid, jlgjobid, jlgstatus, jlgstart, jlgduration) FROM stdin;
    pgagent          postgres    false    231   qw       �          0    16443    pga_jobstep 
   TABLE DATA           �   COPY pgagent.pga_jobstep (jstid, jstjobid, jstname, jstdesc, jstenabled, jstkind, jstcode, jstconnstr, jstdbname, jstonerror, jscnextrun) FROM stdin;
    pgagent          postgres    false    225   �w       �          0    16525    pga_jobsteplog 
   TABLE DATA           |   COPY pgagent.pga_jobsteplog (jslid, jsljlgid, jsljstid, jslstatus, jslresult, jslstart, jslduration, jsloutput) FROM stdin;
    pgagent          postgres    false    233   �w       �          0    24802 
   agenda_alu 
   TABLE DATA           e   COPY public.agenda_alu (aluno_id, pre_nome, sobre_nome, notas_alcancadas, email, uf_alu) FROM stdin;
    public          postgres    false    239   �w       �          0    16583    alunosbcc24 
   TABLE DATA           P   COPY public.alunosbcc24 (id, nome, sobrenome, email, cpf, vr_bolsa) FROM stdin;
    public          postgres    false    237   x       �          0    24813    municipios_cadastrados 
   TABLE DATA           E   COPY public.municipios_cadastrados (cidade, estado, cep) FROM stdin;
    public          postgres    false    240   �y       �          0    16565    pessoas 
   TABLE DATA           9   COPY public.pessoas (nome, sobrenome, idade) FROM stdin;
    public          postgres    false    234   �y       �          0    16570    produtos 
   TABLE DATA           ]   COPY public.produtos (cod_produto, nome_produto, descricao, preco, qtde_estoque) FROM stdin;
    public          postgres    false    235    z       �          0    33051    tbapartamentos 
   TABLE DATA           D   COPY public.tbapartamentos (apartamento_id, vr_aluguel) FROM stdin;
    public          postgres    false    248   �z       �          0    33031    tbcategorias 
   TABLE DATA           D   COPY public.tbcategorias (categoria_id, categoria_nome) FROM stdin;
    public          postgres    false    243   �z       �          0    33070 	   tbcidades 
   TABLE DATA           D   COPY public.tbcidades (cidade_id, cidade_nome, pais_id) FROM stdin;
    public          postgres    false    253   �z       �          0    33061    tbcontinentes 
   TABLE DATA           G   COPY public.tbcontinentes (continente_id, continente_nome) FROM stdin;
    public          postgres    false    251   X{       �          0    33037 	   tbmedicos 
   TABLE DATA           J   COPY public.tbmedicos (medico_id, primeiro_nome, ultimo_nome) FROM stdin;
    public          postgres    false    245   �{       �          0    33045    tbpacientes 
   TABLE DATA           N   COPY public.tbpacientes (paciente_id, primeiro_nome, ultimo_nome) FROM stdin;
    public          postgres    false    246   %|       �          0    33067    tbpaises 
   TABLE DATA           E   COPY public.tbpaises (pais_id, pais_nome, continente_id) FROM stdin;
    public          postgres    false    252   �|       �          0    33057 	   tbpessoas 
   TABLE DATA           E   COPY public.tbpessoas (pessoas_id, email, max_vraluguel) FROM stdin;
    public          postgres    false    249   �|       �          0    33022 
   tbprodutos 
   TABLE DATA           N   COPY public.tbprodutos (produtos_id, produtos_nome, categoria_id) FROM stdin;
    public          postgres    false    242   D}       �           0    0    agenda_alu_aluno_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.agenda_alu_aluno_id_seq', 35, true);
          public          postgres    false    238            �           0    0    alunosbcc24_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.alunosbcc24_id_seq', 17, true);
          public          postgres    false    236            �           0    0 !   tbapartamentos_apartamento_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.tbapartamentos_apartamento_id_seq', 3, true);
          public          postgres    false    247            �           0    0    tbcontinentes_continente_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.tbcontinentes_continente_id_seq', 7, true);
          public          postgres    false    250            �           0    0    tbmedicos_medico_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.tbmedicos_medico_id_seq', 5, true);
          public          postgres    false    244            �           0    0    tbprodutos_produtos_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.tbprodutos_produtos_id_seq', 5, true);
          public          postgres    false    241            7           2606    24809    agenda_alu agenda_alu_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.agenda_alu
    ADD CONSTRAINT agenda_alu_pkey PRIMARY KEY (aluno_id);
 D   ALTER TABLE ONLY public.agenda_alu DROP CONSTRAINT agenda_alu_pkey;
       public            postgres    false    239            5           2606    16588    alunosbcc24 alunosbcc24_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.alunosbcc24
    ADD CONSTRAINT alunosbcc24_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.alunosbcc24 DROP CONSTRAINT alunosbcc24_pkey;
       public            postgres    false    237            3           2606    16576    produtos produtos_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (cod_produto);
 @   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_pkey;
       public            postgres    false    235            =           2606    33056 "   tbapartamentos tbapartamentos_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.tbapartamentos
    ADD CONSTRAINT tbapartamentos_pkey PRIMARY KEY (apartamento_id);
 L   ALTER TABLE ONLY public.tbapartamentos DROP CONSTRAINT tbapartamentos_pkey;
       public            postgres    false    248            ?           2606    33066     tbcontinentes tbcontinentes_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.tbcontinentes
    ADD CONSTRAINT tbcontinentes_pkey PRIMARY KEY (continente_id);
 J   ALTER TABLE ONLY public.tbcontinentes DROP CONSTRAINT tbcontinentes_pkey;
       public            postgres    false    251            ;           2606    33044    tbmedicos tbmedicos_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.tbmedicos
    ADD CONSTRAINT tbmedicos_pkey PRIMARY KEY (medico_id);
 B   ALTER TABLE ONLY public.tbmedicos DROP CONSTRAINT tbmedicos_pkey;
       public            postgres    false    245            9           2606    33029    tbprodutos tbprodutos_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.tbprodutos
    ADD CONSTRAINT tbprodutos_pkey PRIMARY KEY (produtos_id);
 D   ALTER TABLE ONLY public.tbprodutos DROP CONSTRAINT tbprodutos_pkey;
       public            postgres    false    242            @           2620    16595    alunosbcc24 trg_validate_cpf    TRIGGER     �   CREATE TRIGGER trg_validate_cpf BEFORE INSERT OR UPDATE ON public.alunosbcc24 FOR EACH ROW EXECUTE FUNCTION public.validate_cpf();
 5   DROP TRIGGER trg_validate_cpf ON public.alunosbcc24;
       public          postgres    false    280    237            �   ?   x�36��4202�5��50S0��25�2��300667�50��q��5q	422w����� 3x      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   5   x�3�tͫ���O+J���M�4�L���D�s3s���s9}�b���� ���      �   �  x���Mo� �ϓ���۷M+u�U���=VB��T`"簿~p���遙�5�{t�ΰ��?�1��=�<T��^Vu�v��8�+۔������!���י��x�
��p:"����Ӻ#캓��������p��8]���1��$��y4��hE��^��[$1{�ܤ6�q�v�F��Q�B�:������YNxE��3}] 1z���u@�������S�x�3;�=�&�=�Qag�փ023��6����2��qC�jA{㊙�l�1c�ᎆ:"l.o����k��*S�()�xB�a��T�P`ļ�w�Q�,����"��N��"Α�)r�醲n{V°�5��㱓�Q�ԸO�	�WNR���6��U��R�Rr ��<�띤���~�7,h�M����}d�7⤾���?"R.�      �      x������ � �      �      x�sKL���L�/VJ�,�4������� VA      �   V   x�3�tI-I-JO�+IEb*䥖��+�(��p��H�ӈˌ�1�,5+��RHIU(�/-H,�44�307@�eh����� K� R      �      x�3�4400�2�4�Ɯ�@2F��� ,�e      �   ,   x�32�t+*-I,�22�KMO-I��M8}�3R��b���� ք
|      �   Y   x�36���WHIU�J�K�,��42�26��K-W��/��42�26��ϮJ�q�q�''�s�s�s:'�*���q�r��qqq �M�      �   W   x�3�<��83��H�e&'rs:�>j�b+��+����r��
��p�r:�ZPT����e��ZZ�_��e�韜��41F��� |� s      �   V   x�3���)K�K���/J�,J�2��M,I--�tK-��s:�=j�Q�e��_���_\��e��W���_���������� ��P      �   ^   x�32�tJ-�K,J��H-J�,J�22���)K�K����,���r:ZP���钘W�X�ed�阗R��agX&D�9�k^U>�s~qI"W� ���      �   [   x�32�t-.IL�/V��R��\F&�NE�ř9�&\F�����e&'*��+��pq�qz%n��4�22���y�0'/3�ӌ+F��� 9��      �   6   x�32�LLrH�M���K��U�40�22�LNA4	�r��!9���1z\\\ ��      �   G   x�3��M|԰�p����ObQb^V"�c����X��id�e�霚�_Z��r:g�'���L�b���� ���     