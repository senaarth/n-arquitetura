import React, { useState } from "react";
import { MainContainer } from "../../../components/MainContainer";
import Head from "next/head";
import getPrismicClient from "../../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

interface CarouselProps {
    hasVideo: boolean;
    slidesSources: string[];
    videoSource?: string;
    videoPreview?: string;
    title: string;
}

type Project = {
    place: number;
    title: string;
    hasVideo: boolean;
    videoSource: string;
    buttonImg: string;
    slidesSources: string[];
    videoPreview: string;
    isShown: boolean;
};

interface ContainerProps {
    projetos: Project[];
    shownProjectCarouselProps: CarouselProps;
}

export default function Container({ projetos, shownProjectCarouselProps }: ContainerProps) {
    const router = useRouter();

    const [contentProps, setContentProps] = useState({
        carouselProps: shownProjectCarouselProps ?? null,
        mobileDescription:
            "NESTA PÁGINA VOCÊ PODE SELECIONAR UM PROJETO PARA VISUALIZAR, BASTA UM TOQUE.",
    });

    const emptyMenu = [
        {
          title: "",
          isActive: false,
          isLink: false,
          type: "text",
        },
        {
          title: "",
          isActive: false,
          isLink: false,
          type: "text",
        },
        {
          title: "PROJETOS",
          isActive: true,
          isLink: true,
          route: "projetos",
          type: "text",
        },
        {
          title: "CONTAINER",
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
          title: "",
          isActive: false,
          isLink: false,
          type: "text",
        },
        {
          title: "",
          isActive: false,
          isLink: false,
          type: "text",
        },
        {
          title: "",
          isActive: false,
          isLink: false,
          type: "text",
        },
    ];

    let menuItems = emptyMenu;

    const projetosContent = projetos?.reduce((acc, item) => {
        return [
            ...acc,
            {
                isShown: item.isShown,
                title: item.title,
                isActive: false,
                isLink: true,
                path: item.buttonImg,
                type: "project",
                content: {
                    carouselProps: {
                        slidesSources: item.slidesSources,
                        hasVideo: item.hasVideo,
                        videoSource: item.videoSource,
                        videoPreview: item.videoPreview,
                        title: item.title,
                    },
                },
            },
        ];
    }, []);

    projetos?.forEach((value, index) => {
        if (value.place < 3 || value.place > 5) {
            menuItems[value.place - 1] = projetosContent[index];
        }
    });

    React.useEffect(() => {
        if (!shownProjectCarouselProps?.slidesSources) {
            router.push("/projetos/container");
        }
    }, [projetos]);

    return (
        <>
            <Head>
                <title>Projetos | N!</title>
            </Head>
            <MainContainer
                menuItems={menuItems}
                contentProps={contentProps}
                setContentProps={setContentProps}
            />
        </>
    );
}

export const getStaticPaths = async () => {
    const prismic = getPrismicClient();
    const posts = await prismic.query(
        [Prismic.Predicates.at('document.type', 'projeto')]
    );

    const paths = posts.results.map((post) => {
        return {
            params: {
                uid: post.uid,
            }
        }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const prismic = getPrismicClient();

    const res = await prismic.query(
        [Prismic.predicates.at("document.type", "projeto")]
    );

    const projectsResults = res.results.filter(
        (item) => item.data.categoria === "CONTAINER"
    );

    const projetos = projectsResults.reduce((acc, item) => {
        return [
            ...acc,
            {
                place: item.data.ordenacao,
                title: RichText.asText(item.data.title),
                hasVideo: item.data.has_video,
                videoSource: item.data.video?.url ?? "",
                buttonImg: item.data.btn_img?.url ?? "",
                videoPreview: item.data.video_preview?.url ?? "",
                slidesSources: item.data.body[0].items,
                isShown: item.uid === params.uid,
            },
        ];
    }, []);

    projetos?.forEach((item) => {
        if (item.slidesSources) {
            item.slidesSources = item.slidesSources.reduce((acc, item) => {
                return [...acc, item.image.url];
            }, []);
        }
    });

    let shownProjectCarouselProps = {};

    projetos?.forEach((item) => {
        if (item.isShown) {
            shownProjectCarouselProps = {
                slidesSources: item.slidesSources,
                hasVideo: item.hasVideo,
                videoSource: item.videoSource,
                videoPreview: item.videoPreview,
                title: item.title,
            }
        }
    });

    return {
        props: {
            projetos,
            shownProjectCarouselProps,
        },
    };
};
