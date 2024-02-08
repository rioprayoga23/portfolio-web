import Navbar from "../Navbar";

import { Anonymous_Pro, Nunito } from "next/font/google";

import Footer from "../Footer/Index";

const anonymous = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainLayout = ({ children }) => {
  return (
    <main
      className={`flex flex-col h-screen justify-between ${nunito.className}`}
    >
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
