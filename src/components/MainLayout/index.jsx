import Navbar from "../Navbar";

import { M_PLUS_Rounded_1c } from "next/font/google";

const mplus = M_PLUS_Rounded_1c({ subsets: ["latin"], weight: ["400", "700"] });

const MainLayout = () => {
  return (
    <main className={`light ${mplus.className}`}>
      {/* Navbar */}
      <Navbar />
    </main>
  );
};

export default MainLayout;
