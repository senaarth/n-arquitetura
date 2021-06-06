import React, { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import Head from "next/head";

interface ContentProps {
  title?: string;
  description?: string;
}

export default function Solucoes() {
  const [contentProps, setContentProps] = useState({} as ContentProps);

  const arqDesc = (
    <>
      <p>
        O time da N! foi configurado para desenvolver projetos de arquitetura
        que atendam todos os requisitos funcionais, estéticos, simbólicos,
        econômicos e mercadológicos, e ainda, garantir que a aplicação da
        macrofunção sustentabilidade seja um norte que qualifique, diferencie e
        seja capaz de agregar valores aos nossos edifícios.
        <br />
        Alinhada às demandas tecnológicas mais atuais, nossa equipe conta com um
        arquiteto-gestor da metodologia BIM (building information modeling)
        garantindo um melhor planejamento, uma execução otimizada e uma
        gestão/manutenção mais eficiente no pós ocupação.
        <br />
        Do mesmo modo, a aplicação de novas tecnologias construtivas é uma
        diretriz primária nos nossos projetos e busca principalmente:
      </p>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Usar a tecnologia como caminho estético,
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Construir mais rápido,
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Otimizar os custos e,
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Diminuir resíduos colaborando para um mundo mais N!.
      </li>
    </>
  );

  const urbDesc = (
    <>
      <p>
        Com uma visão multidisciplinar estamos atentos às novas dinâmicas
        sociais e buscamos projetar de maneira a criar um vínculo afetivo do
        usuário às malhas desenvolvidas por nós.
        <br />A principal diretriz é criar um desenho urbano instigador que
        traga experiências ao usuário elevando o ato de caminhar e o convívio a
        um patamar mais importante, promovendo a partir disto experiências mais
        complexas e plenas.
        <br />
        Buscamos resgatar o conceito “do meu lugar”, onde a rua deixa de ser
        apenas um código postal, mas principalmente, que priorize a sensação de
        extensão da casa, possibilitando um desenvolvimento social completo e
        garantindo um espaço seguro a partir da ocupação dos espaços públicos
        pelas pessoas.
        <br />
        Para nós, morar, trabalhar e se divertir são funções complementares que
        interagem totalmente entre si garantindo conforto e saúde física e
        mental aos usuários, um espaço que nasce para recuperar e não
        pressionar.
      </p>
    </>
  );

  const estudosDesc = (
    <>
      Nossa equipe disponibiliza toda expertise e experiência na elaboração de
      análises e avaliações para seleção e recomendação de alternativas de
      concepção de negócios no cenário da construção civil.
      <br />A partir de dados estatíticos e demográficos, da análise da
      legislação, de levantamentos in loco, de avaliação de custos, do cenário
      econômico e outros tantos fatores, nossos analistas apontam as diretrizes
      e ordenam o processo de tomada de decisões, subsidiando e promovendo a
      gestão dos principais vetores envolvidos.
      <br />
      Os estudos de viabilidade podem se configurar de diversas maneiras, como
      exemplo:
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Viabilidade Mercadológica;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Viabilidade Urbanística;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Viabilidade Financeira;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Viabilidade Ambiental;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        etc.
      </li>
      <p>
        No geral nossos estudos apresentam visões multidiscplinares que
        contemplam uma diversidade de fatores que quando avaliados em conjunto
        garantem maior tranquilidade no momento de decidir.
      </p>
    </>
  );

  const direitoTitle = (
    <>
      <li style={{ listStyle: "none" }}>DIREITO</li>
      <li style={{ listStyle: "none" }}>IMOBILIÁRIO</li>
    </>
  );

  const direitoDesc = (
    <>
      <p>
        A partir da demanda de apoio jurídico interno da N! Assim como de
        soluções para nossos clientes, elaboramos com sucesso uma parceria com o
        escritório Alves e Farnese advogados.
        <br />
        Atuando desde o desembaraço de espólios até a formulação de contratos
        entre as partes envolvidas, o escritório tem apresentado uma dinâmica
        ágil e conciliadora, características que têm mostrado um impacto
        altamente positivo na ratificação e fluidez dos negócios gestados na N!.
        <br />
        Vale ressaltar que o escritório Alves e Farnese está estruturando um
        braço de ação no direito urbanístico que a curto prazo trará maior
        conforto e tranquilidade aos nossos clientes.
      </p>
    </>
  );

  const periciasDesc = (
    <>
      <p>
        A qualificação de nossa equipe tem permitido a atuação em processos
        judiciais e conciliatórios como peritos designados pelo poder público ou
        como peritos assistentes contratados pelas partes. A capacidade técnica
        e experiência envolvida tem ajudado na resolução de conflitos.
        <br />
        Assim como nossos projetos, as perícias têm uma visão multidisciplinar
        que promove um olhar mais amplo sobre as questões e, portanto, são mais
        completas como documento jurídico. Tais perícias podem se dar tanto na
        avaliação física de imóveis quanto nas questões legais advindas do
        processo.
      </p>
      <h1>AVALIAÇÕES</h1>
      <p>
        Nossas avaliações imobiliárias se destacam por serem exclusivamente
        produzidas por arquitetos qualificados para esse trabalho. Essa condição
        permite uma análise mais refinada em função de que muito mais aspectos
        edilícios e urbanísticos compõem a formatação do valor atribuído ao
        imóvel.
      </p>
    </>
  );

  const develTitle = (
    <>
      <li style={{ listStyle: "none" }}>DESENVOLVIMENTO</li>
      <li style={{ listStyle: "none" }}>DE NEGÓCIOS</li>
    </>
  );

  const periciasTitle = (
    <>
      <li style={{ listStyle: "none" }}>PERÍCIAS</li>
      <li style={{ listStyle: "none" }}>E</li>
      <li style={{ listStyle: "none" }}>AVALIAÇÕES</li>
    </>
  );

  const develDesc = (
    <>
      A construção civil tem sido uma ferramenta de impulsionamento da economia,
      seja pelos aspectos econômicos do construir ou pelas condições colocadas
      no mercado imobiliário que vai do processo de venda até a organização da
      ocupação, o que percebemos é uma rede muito vasta de possibilidades de
      negócios.
      <br />
      Quando avaliamos esse sistema econômico verticalizado, vimos que a
      arquitetura e urbanismo se vincula a quase todas as etapas do processo,
      desde a análise de viabilidade de um terreno até a especificação do sofá
      na sala de espera de um consultório, nós arquitetos e urbanistas podemos
      estar presentes.
      <br />
      Por essas possibilidades nossa equipe vem se especializando em usar
      técnica e criatividade para projetos que tenham viés negocial, ou seja,
      que sejam capazes de produzir ganhos e incremento patrimonial para nossos
      clientes.
      <br />
      Estamos atentos ao mercado, às pessoas e ao novo jeito de morar....Prontos
      para desenvolver produtos e negócios.
    </>
  );

  const regDesc = (
    <>
      <p>
        A N! atua na regularização de áreas já consolidadas e passíveis de tal
        ordenamento.
        <br />
        As ações geralmente são baseadas em:
      </p>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Levantamento da situação atual;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Avaliação dos aspectos legais;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Análise de conformidades;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Ajustes e adequações à legislação, e;
      </li>
      <li
        style={{
          marginBottom: "0.1rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.4rem",
        }}
      >
        Acompanhamento junto aos órgãos públicos, inclusive no ministério
        público subsidiando a elaboração e planejamento de TAC’s (termo de
        ajuste de conduta) quando necessário.
      </li>
    </>
  );

  const menuItems = [
    {
      title: "ARQUITETURA",
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "Arquitetura",
        description: arqDesc,
      },
    },
    {
      title: "SOLUÇÕES",
      isActive: true,
      isLink: false,
      type: "text",
    },
    {
      title: "URBANISMO",
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "URBANISMO",
        description: urbDesc,
      },
    },
    {
      title: "ESTUDOS DE VIABILIDADE",
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "ESTUDOS DE VIABILIDADE",
        description: estudosDesc,
      },
    },
    {
      title: "logo",
      isActive: false,
      isLink: true,
      route: "/",
      type: "logo",
    },
    {
      title: develTitle,
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "DESENVOLVIMENTO DE NEGÓCIOS",
        description: develDesc,
      },
    },
    {
      title: direitoTitle,
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "DIREITO URBANÍSTICO E IMOBILIÁRIO",
        description: direitoDesc,
      },
    },
    {
      title: "REGULARIZAÇÕES",
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "REGULARIZAÇÕES",
        description: regDesc,
      },
    },
    {
      title: periciasTitle,
      isActive: false,
      isLink: true,
      type: "mobile",
      content: {
        title: "PERÍCIAS",
        description: periciasDesc,
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Soluções | N!</title>
      </Head>
      <MainContainer
        menuItems={menuItems}
        contentProps={contentProps}
        setContentProps={setContentProps}
      />
    </>
  );
}
