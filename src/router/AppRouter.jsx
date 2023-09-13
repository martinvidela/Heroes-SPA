import React from "react";
import { LoginPage } from "../auth";
import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes/routes/heroesRoutes";

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
