import React from "react";
import NavegationBar from "./NavegationBar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <NavegationBar />
      <Outlet />
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}
