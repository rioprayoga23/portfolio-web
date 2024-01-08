import MainLayout from "@/components/core/Layout/MainLayout";

export default function Home() {
  return <MainLayout />;
}

export const getServerSideProps = async (context) => {
  // console.log({ context });

  return { props: {} };
};
