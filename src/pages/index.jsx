import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useSetTheme from "@/hooks/useSetTheme";

import Preloader from "@/components/Preloader";
import { WorkspaceSpinner } from "@/components/Workspace3d/loader";
import ContentLayout from "@/components/core/Layout/ContentLayout";
import MainLayout from "@/components/core/Layout/MainLayout";

const Workspace3d = dynamic(
  () => import("@/components/Workspace3d/workspace"),
  {
    ssr: false,
    loading: () => <WorkspaceSpinner />,
  }
);

export default function Home() {
  useSetTheme();
  const { asPath } = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <MainLayout>
      {/* {!asPath.split("/")?.[1] && (
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
      )} */}
      <Workspace3d />
      <ContentLayout />
    </MainLayout>
  );
}

export const getServerSideProps = async (context) => {
  return { props: {} };
};
