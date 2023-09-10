import React from "react";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/heroesRoutes";
import { Navbar } from "../ui/components/NavBar";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
