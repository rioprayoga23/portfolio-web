import Navbar from "../Navbar";

import { Anonymous_Pro, Nunito } from "next/font/google";

import dynamic from "next/dynamic";
import { WorkspaceSpinner } from "../../Workspace3d/loader";
import Footer from "../Footer/Index";
import ContentLayout from "./ContentLayout";

const anonymous = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Workspace3d = dynamic(
  () => import("@/components/Workspace3d/workspace"),
  {
    ssr: false,
    loading: () => <WorkspaceSpinner />,
  }
);

const MainLayout = () => {
  return (
    <main className={`${nunito.className}`}>
      <Navbar />
      <Workspace3d />
      <ContentLayout />
      <Footer />
    </main>
  );
};

export default MainLayout;
