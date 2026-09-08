import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function Bar() {
  return (
    <>
      <SideBar />
      <NavBar />
      <main className="pt-20 pl-64 pr-4 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Bar;
