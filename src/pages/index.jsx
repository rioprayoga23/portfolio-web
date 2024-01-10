import MainLayout from "@/components/core/Layout/MainLayout";
import useSetTheme from "@/hooks/useSetTheme";

export default function Home() {
  useSetTheme();
  return <MainLayout />;
}

export const getServerSideProps = async (context) => {
  return { props: {} };
};
