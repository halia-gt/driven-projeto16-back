--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer,
    url text NOT NULL,
    "shortUrl" character varying(8),
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    email character varying(50) NOT NULL,
    "passwordHash" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTc3MjUzMX0.8qdTRnpzpXeWw7y91LkryqNmQJ7aLoC9qvGyZA_uHN8', '2022-10-14 15:35:31.053588');
INSERT INTO public.sessions VALUES (2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTc3MjcxNH0.LCjgoKOpLzPM_7DSe6VdPRXU0f0SrU-5NCmZrnnFrKY', '2022-10-14 15:38:34.820203');
INSERT INTO public.sessions VALUES (3, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2NTg0NzI4Nn0.XHRZUn3VSOXS0RFKpAECYvkomwZqBX9ns1zFFRKi68w', '2022-10-15 12:21:26.315604');
INSERT INTO public.sessions VALUES (4, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksImlhdCI6MTY2NTg1NDg2Nn0.9Hw_fNwCZeVFuWqqVaDGECfVRRcs1ljQv8tPPYADEy0', '2022-10-15 14:27:46.166344');
INSERT INTO public.sessions VALUES (5, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksImlhdCI6MTY2NTg2MTI1MX0.dqEUOoeaOSbNEnpnsThQ3REJ5ybN9Nanzw8mxayYtpo', '2022-10-15 16:14:11.289359');
INSERT INTO public.sessions VALUES (12, 13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJpYXQiOjE2NjU4ODIxOTF9.uH9A7hp4SiiVfgU8TDJ_kyiqj6k0pmFWHpisFsjyqqY', '2022-10-15 22:03:11.495715');
INSERT INTO public.sessions VALUES (13, 14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2NjU4ODI2NzJ9.wsIKT4IZ5LDvYZEuH_Fq_80KbnSk59COwxY70RXCawg', '2022-10-15 22:11:12.603241');
INSERT INTO public.sessions VALUES (14, 14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2NjU4ODM3NDB9.2dE9M6esssrgk99gTol-QamDWpGPJCvVRL5eeCeyGRo', '2022-10-15 22:29:00.42892');
INSERT INTO public.sessions VALUES (15, 14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE2NjU4ODQ5MDR9.CiV1Ml6Yiv76nQoR3TvyMSjsUAMboxYb2MbR5zvL1NI', '2022-10-15 22:48:24.094787');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (2, 2, 'http://storytel.com', 'COPTD9yC', 18, '2022-10-15 12:21:47.144832');
INSERT INTO public.urls VALUES (3, 2, 'http://google.com', 'FdlANij7', 3, '2022-10-15 12:36:38.52504');
INSERT INTO public.urls VALUES (4, 9, 'http://youtube.com', '5q3_z06n', 0, '2022-10-15 16:22:28.885646');
INSERT INTO public.urls VALUES (5, 9, 'https://trello.com', 'xdgE0y2F', 8, '2022-10-15 17:19:24.497069');
INSERT INTO public.urls VALUES (6, 14, 'https://www.amazon.com', 'oRxarj75', 6, '2022-10-15 22:59:17.308099');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@email.com', '$2b$10$HB/AU7u4/0xNdFfzz5sFo.udUbZbPx/fcN4G6ZWnpcRkInPSS5E/O', '2022-10-14 14:35:59.049779');
INSERT INTO public.users VALUES (2, 'Maria', 'maria@email.com', '$2b$10$ENvl1kDU9M.N5Mi2weUvSuVkH47B/G1SPMPP4LZcOmdtIr7CXtGa2', '2022-10-14 14:37:49.968443');
INSERT INTO public.users VALUES (3, 'Ana', 'ana@email.com', '$2b$10$oduHHwOxsA5HOiA6OQQmXOsTgzelWdCYFGaEcSW9O.8ePrVH9WZ.a', '2022-10-14 14:38:16.541279');
INSERT INTO public.users VALUES (5, 'Julio', 'julio@email.com', '$2b$10$9OMCpP5OKxR2r9nkiyVY0eOvvZiBL8s5v4AA2mlRwpUPpK/l/j66i', '2022-10-14 14:39:06.680119');
INSERT INTO public.users VALUES (6, 'Anita', 'anita@email.com', '$2b$10$XILumhiMoifzPjp58FG.g.qAx5PDWdFGpFYY3iSOrmxBmTgqc/K9e', '2022-10-14 14:39:28.913758');
INSERT INTO public.users VALUES (7, 'Quinn', 'quinn@email.com', '$2b$10$nAeUfJMkA0y1K.6mqjYs7utVqSUaSyFKn2WwkM0NYuF7qwIc7vB1O', '2022-10-14 14:39:43.181069');
INSERT INTO public.users VALUES (8, 'Qiyana', 'qiyana@email.com', '$2b$10$V6FUJv2vXyiUJ9.xTvZoMeWH.Jv7vGn5qBOYxk0Mmi.m44UgPPm4u', '2022-10-14 14:39:54.531241');
INSERT INTO public.users VALUES (9, 'Ezreal', 'ezreal@email.com', '$2b$10$D2Griqqgo1A8LYtAgbmuC.EkfolVNtsnH.UHvHYf3cwD8YzVx.dHe', '2022-10-14 14:40:09.180588');
INSERT INTO public.users VALUES (10, 'Jayce', 'jayce@email.com', '$2b$10$IIn63QZZXdBTW9TOGmFhrurYeRswMeyQ.fuFEAzQ745rLkv3PgxRS', '2022-10-14 14:40:34.190613');
INSERT INTO public.users VALUES (11, 'Braum', 'braum@email.com', '$2b$10$MTJlVrSDcVoG7s6KZk5pjuHJv1qFwxO0vbPESLmF1kse0yFwfSihC', '2022-10-14 14:40:47.384886');
INSERT INTO public.users VALUES (12, 'Annie', 'annie@email.com', '$2b$10$wG1INJfctq1XVCryyU9kFO4sp3xsD/MKTs/oOAVMwrvYHyucKJKnC', '2022-10-15 16:14:47.357848');
INSERT INTO public.users VALUES (13, 'Olaf', 'olaf@email.com', '$2b$10$LV0VCBbaJoTjitJvGlaAyOYS.7vmxjQs4ilsGdZna6Z25mrz3o2i.', '2022-10-15 16:59:16.022722');
INSERT INTO public.users VALUES (14, 'Teemo', 'teemo@email.com', '$2b$10$AztZsPotYV46AnAflQ4hw.Wn7g5o.W7wlPcuYIKLVLWubMmn915jW', '2022-10-15 21:12:19.271321');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 15, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

