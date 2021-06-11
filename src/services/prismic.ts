import Prismic from "@prismicio/client";

export default function getPrismicClient() {
  const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT);

  return prismic;
}
