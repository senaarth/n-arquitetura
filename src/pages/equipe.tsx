import { useState } from "react";
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
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui porro pariatur illo dolore hic dolorem quis cum mollitia veritatis quibusdam, at saepe numquam a tempora repellendus distinctio id! Ipsum?",
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
    <MainContainer
      menuItems={menuItems}
      contentProps={contentProps}
      setContentProps={setContentProps}
    />
  );
}
