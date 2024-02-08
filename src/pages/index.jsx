import dynamic from "next/dynamic";

import { WorkspaceSpinner } from "@/components/Workspace3d/loader";
import ContentLayout from "@/components/core/Layout/ContentLayout";
import MainLayout from "@/components/core/Layout/MainLayout";
import useSetTheme from "@/hooks/useSetTheme";

const Workspace3d = dynamic(
  () => import("@/components/Workspace3d/workspace"),
  {
    ssr: false,
    loading: () => <WorkspaceSpinner />,
  }
);

export default function Home() {
  useSetTheme();
  return (
    <MainLayout>
      <Workspace3d />
      <ContentLayout />
    </MainLayout>
  );
}

export const getServerSideProps = async (context) => {
  return { props: {} };
};
