import Navbar from "../Navbar";

import { M_PLUS_Rounded_1c, Anonymous_Pro, Nunito } from "next/font/google";

import dynamic from "next/dynamic";
import { WorkspaceSpinner } from "../Workspace3d/loader";
import ContentLayout from "./ContentLayout";

const mplus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ["400", "700"] });
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
    <main className={`light ${nunito.className}`}>
      {/* Navbar */}
      <Navbar />
      <Workspace3d />
      <ContentLayout />
    </main>
  );
};

export default MainLayout;
