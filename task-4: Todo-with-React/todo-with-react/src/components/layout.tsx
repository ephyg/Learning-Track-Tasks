import Router from "../routes/router";
import NavBar from "./nav-bar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 right-0 left-0 bg-background border-b">
        <NavBar />
      </div>
      <div className="pt-20">
        <Router />
      </div>
    </div>
  );
};

export default Layout;
