// Layout.js

import React from "react";
import NavigationBar from "./NavigationBar";



function Layout({ children }) {
  return (
    <div className="layout">
      <NavigationBar />
      
      <main className="content">{children}</main>
    </div>
  );
}
//hello world
export default Layout;
