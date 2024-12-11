import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
function Layout() {
    return (
      <div>
        <Navbar />
        <main>
          <Outlet /> {/* Content will be rendered here */}
        </main>
        <Footer />
      </div>
    );
  }
  export default Layout;