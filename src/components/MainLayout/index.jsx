import Navbar from "../Navbar";

import { M_PLUS_Rounded_1c } from "next/font/google";

import { WorkspaceSpinner } from "../Workspace3d/loader";
import dynamic from "next/dynamic";

const mplus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ["400", "700"] });

const Workspace3d = dynamic(
  () => import("@/components/Workspace3d/workspace"),
  {
    ssr: false,
    loading: () => <WorkspaceSpinner />,
  }
);

const MainLayout = () => {
  return (
    <main className={`light ${mplus.className}`}>
      {/* Navbar */}
      <Navbar />
      <Workspace3d />
    </main>
  );
};

export default MainLayout;
