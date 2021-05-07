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
          "Possui Pós-graduação em Reabilitação Ambiental pela Faculdade de Arquitetura e Urbanismo pela Universidade de Brasília onde também adquiriu sua graduação (2002). Com 17 (dezessete) anos de docência, ajudou a estruturar os principais cursos de Arquitetura e Urbanismo do DF e colaborou para a formação de uma grande quantidade de profissionais. É proprietário da N! Arquitetura Gestão e Negócios com experiência na área de Arquitetura e Urbanismo com ênfase em Planejamento e Projetos da Edificação. As atividades profissionais são divididas entre o campo teórico e o prático, atuando no mercado da construção civil tanto na elaboração de projetos arquitetônicos quanto na viabilização, compatibilização e construção de empreendimentos.",
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
          "Mestre em Arquitetura pela McGill University Atuou como consultor do Ministério da Saúde, FUNASA, ONU e OPAS, além de professor e coordenador de cursos de Especialização em Arquitetura em Hospitalar. Foi o presidente da Associação Brasileira para o Desenvolvimento do Edifício Hospitalar na gestão 2014-2017. Atualmente é Vice-Presidente de Desenvolvimento Tecnico-Científico da ABDEH, presidente da comissão científica do IX CBDEH, editor-convidado da revista do Instituto de Pesquisas Hospitalares Jarbas Karman (IPH), coordenador técnico do curso de Especialização em Arquitetura de Clínicas e Hospitais do Instituto ESP de Manaus e professor no Curso de Arquitetura e Urbanismo da Universidade Estadual do Maranhão (UEMA), atuando também em projetos e consultorias na área da saúde.",
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
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
