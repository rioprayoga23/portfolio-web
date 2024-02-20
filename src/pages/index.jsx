import dynamic from "next/dynamic";

import useSetTheme from "@/hooks/useSetTheme";

import { WorkspaceSpinner } from "@/components/Workspace3d/loader";
import ContentLayout from "@/components/core/Layout/ContentLayout";
import MainLayout from "@/components/core/Layout/MainLayout";
import { portfolioData } from "@/data/portfolios";

const Workspace3d = dynamic(
  () => import("@/components/Workspace3d/workspace"),
  {
    ssr: false,
    loading: () => <WorkspaceSpinner />,
  }
);

export default function Home({ detailPortfolio }) {
  useSetTheme();

  return (
    <MainLayout>
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
