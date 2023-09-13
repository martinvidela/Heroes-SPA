import React from "react";
import { Navbar } from "../../ui/components/NavBar";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const heroesRoutes = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />

          
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </div>
  );
};
