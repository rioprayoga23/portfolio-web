import dynamic from "next/dynamic";

import { portfolioData } from "@/data/portfolios";
import useSetTheme from "@/hooks/useSetTheme";

import { WorkspaceSpinner } from "@/components/Workspace3d/loader";
import ContentLayout from "@/components/core/Layout/ContentLayout";
import MainLayout from "@/components/core/Layout/MainLayout";
import Head from "next/head";
import { useRouter } from "next/router";

const Workspace3d = dynamic(
  () => import("@/components/Workspace3d/workspace"),
  {
    ssr: false,
    loading: () => <WorkspaceSpinner />,
  }
);

export default function Home({ detailPortfolio }) {
  useSetTheme();
  const { asPath } = useRouter();

  const title = Object.keys(detailPortfolio).length
    ? `${detailPortfolio?.name} | Porfolio`
    : asPath == "/portfolio"
    ? "Porfolio"
    : "Rio Prayoga | About";

  return (
    <MainLayout>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key={title} />
      </Head>
      <Workspace3d />
      <ContentLayout detailPortfolio={detailPortfolio} />
    </MainLayout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const detailPortfolio = portfolioData.filter(
    (item) => item.slug === query.q
  )?.[0];

  return { props: { detailPortfolio: detailPortfolio ?? {} } };
};
