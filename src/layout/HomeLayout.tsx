import React, {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MainLayoutProps = {
  children?: ReactNode;
  headerTransition?: boolean;
};

const HomeLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default HomeLayout;