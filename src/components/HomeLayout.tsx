import Footer from "./Footer";
import Navbar from "./Navbar";

const HomeLayout = ({children}:any) => {
  return (
    <>
      <Navbar />
      {children} 
      <Footer />
    </>
  )
}

export default HomeLayout;