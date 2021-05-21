import { useState } from "react";
import Head from "next/head";
import { MainContainer } from "../components/MainContainer";

interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mobileDescription?: string;
}

export default function Equipe() {
  const [contentProps, setContentProps] = useState({
    mobileDescription:
      "VOCÊ ESTÁ EM NOSSA PÁGINA DE EQUIPE, ESCOLHA UM INTEGRANTE PARA VER SUA DESCRIÇÃO",
  });

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
          "Possui pós-graduação em reabilitação ambiental pela faculdade de arquitetura e urbanismo pela universidade de Brasília onde também adquiriu sua graduação (2002). Com 17 (dezessete) anos de docência, ajudou a estruturar os principais cursos de arquitetura e urbanismo do df e colaborou para a formação de uma grande quantidade de profissionais. É proprietário da N! Arquitetura Gestão e Negócios com experiência na área de arquitetura e urbanismo com ênfase em planejamento e projetos da edificação. As atividades profissionais são divididas entre o campo teórico e o prático, atuando no mercado da construção civil tanto na elaboração de projetos arquitetônicos quanto na viabilização, compatibilização e construção de empreendimentos.",
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
          "Mestre em arquitetura pela MCGill University atuou como consultor do Ministério da saúde, FUNASA, ONU e OPAS, além de professor e coordenador de cursos de especialização em arquitetura em hospitalar. Foi o presidente da associação brasileira para o desenvolvimento do edifício hospitalar na gestão 2014-2017. Atualmente é vice-presidente de desenvolvimento tecnico-científico da Abdeh, presidente da comissão científica do IX CBDEH, editor-convidado da revista do instituto de pesquisas hospitalares Jarbas Karman (IPH), coordenador técnico do curso de especialização em arquitetura de clínicas e hospitais do instituto ESP de Manaus e professor no curso de arquitetura e urbanismo da universidade estadual do maranhão (UEMA), atuando também em projetos e consultorias na área da saúde.",
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
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
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
