import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "./components/layout/Layout";
import { SidebarProvider } from "./context/SidebarContext";
import { routes } from "./routes";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SidebarProvider>
        <Router>
          <Layout>
          <Routes>
            
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
        </Router>
      </SidebarProvider>
    </DndProvider>
  );
}

export default App;
