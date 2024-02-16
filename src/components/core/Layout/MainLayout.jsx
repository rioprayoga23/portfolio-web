import Navbar from "../Navbar";

import { Anonymous_Pro, Nunito } from "next/font/google";

import Footer from "../Footer/Index";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainLayout = ({ children }) => {
  return (
    <main className={`flex flex-col h-screen ${nunito.className}`}>
      <Navbar />
      <section className="flex-1">{children}</section>
      <Footer />
    </main>
  );
};

export default MainLayout;
