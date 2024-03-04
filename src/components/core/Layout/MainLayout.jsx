import { Anonymous_Pro, Nunito } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import Navbar from "../Navbar";
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
    </main>
  );
};

export default MainLayout;
