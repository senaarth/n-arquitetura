import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Equipe() {
  const [contentProps, setContentProps] = useState({} as ContentProps);

  const menuItems = [
    {
      title: "Nelton",
      isActive: false,
      isLink: true,
      path: "nelton.jpg",
      type: "teamMember",
      content: {
        title: "NELTON KETI BORGES",
        subtitle: "Arquiteto e Urbanista",
        description:
          "POSSUI PÓS-GRADUAÇÃO EM REABILITAÇÃO AMBIENTAL PELA FACULDADE DE ARQUITETURA E URBANISMO PELA UNIVERSIDADE DE BRASÍLIA ONDE TAMBÉM ADQUIRIU SUA GRADUAÇÃO (2002). COM 17 (DEZESSETE) ANOS DE DOCÊNCIA, AJUDOU A ESTRUTURAR OS PRINCIPAIS CURSOS DE ARQUITETURA E URBANISMO DO DF E COLABOROU PARA A FORMAÇÃO DE UMA GRANDE QUANTIDADE DE PROFISSIONAIS. É PROPRIETÁRIO DA N! ARQUITETURA GESTÃO E NEGÓCIOS COM EXPERIÊNCIA NA ÁREA DE ARQUITETURA E URBANISMO COM ÊNFASE EM PLANEJAMENTO E PROJETOS DA EDIFICAÇÃO. AS ATIVIDADES PROFISSIONAIS SÃO DIVIDIDAS ENTRE O CAMPO TEÓRICO E O PRÁTICO, ATUANDO NO MERCADO DA CONSTRUÇÃO CIVIL TANTO NA ELABORAÇÃO DE PROJETOS ARQUITETÔNICOS QUANTO NA VIABILIZAÇÃO, COMPATIBILIZAÇÃO E CONSTRUÇÃO DE EMPREENDIMENTOS.",
      },
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "Marcio",
      isActive: false,
      isLink: true,
      path: "marcio.jpeg",
      type: "teamMember",
      content: {
        title: "MÁRCIO OLIVEIRA",
        subtitle: "Arquiteto e Urbanista",
        description:
          "MESTRE EM ARQUITETURA PELA MCGILL UNIVERSITY ATUOU COMO CONSULTOR DO MINISTÉRIO DA SAÚDE, FUNASA, ONU E OPAS, ALÉM DE PROFESSOR E COORDENADOR DE CURSOS DE ESPECIALIZAÇÃO EM ARQUITETURA EM HOSPITALAR. FOI O PRESIDENTE DA ASSOCIAÇÃO BRASILEIRA PARA O DESENVOLVIMENTO DO EDIFÍCIO HOSPITALAR NA GESTÃO 2014-2017. ATUALMENTE É VICE-PRESIDENTE DE DESENVOLVIMENTO TECNICO-CIENTÍFICO DA ABDEH, PRESIDENTE DA COMISSÃO CIENTÍFICA DO IX CBDEH, EDITOR-CONVIDADO DA REVISTA DO INSTITUTO DE PESQUISAS HOSPITALARES JARBAS KARMAN (IPH), COORDENADOR TÉCNICO DO CURSO DE ESPECIALIZAÇÃO EM ARQUITETURA DE CLÍNICAS E HOSPITAIS DO INSTITUTO ESP DE MANAUS E PROFESSOR NO CURSO DE ARQUITETURA E URBANISMO DA UNIVERSIDADE ESTADUAL DO MARANHÃO (UEMA), ATUANDO TAMBÉM EM PROJETOS E CONSULTORIAS NA ÁREA DA SAÚDE.",
      },
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/about",
      type: "logo",
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
    {
      title: "EQUIPE",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "Nei Filho",
      isActive: false,
      isLink: true,
      path: "nei_filho.jpeg",
      type: "teamMember",
      content: {
        title: "NEI BORGES FILHO",
        subtitle: "Software Developer",
        description:
          "SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT. NEQUE PORRO QUISQUAM EST, QUI DOLOREM IPSUM QUIA DOLOR SIT AMET, CONSECTETUR, ADIPISCI VELIT, SED QUIA NON NUMQUAM EIUS MODI TEMPORA INCIDUNT UT LABORE ET DOLORE MAGNAM ALIQUAM QUAERAT VOLUPTATEM. UT ENIM AD MINIMA VENIAM, QUIS NOSTRUM EXERCITATIONEM ULLAM CORPORIS SUSCIPIT LABORIOSAM, NISI UT ALIQUID EX EA COMMODI CONSEQUATUR? QUIS AUTEM VEL EUM IURE REPREHENDERIT QUI IN EA VOLUPTATE VELIT ESSE QUAM NIHIL MOLESTIAE.",
      },
    },
    {
      title: "",
      isActive: false,
      isLink: false,
      type: "text",
    },
  ];

  return (
    <>
      <Head>
        <title>Equipe | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={contentProps}
        setContentProps={setContentProps}
      />
    </>
  );
}
