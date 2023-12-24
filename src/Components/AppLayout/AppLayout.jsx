import { Outlet } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import Sidebar from "./Sidebar";
import { useState } from "react";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex lg:grid lg:grid-cols-[15rem,1fr] flex-col grid-rows-[auto,1fr] h-screen">
      {/* <header className="col-span-5 bg-sky-200">Header</header> */}
      <LayoutHeader openSidebar={() => setIsSidebarOpen(true)} />

      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <main className="w-[100%]">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
