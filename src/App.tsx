import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Ecomarket } from "./pages/Ecomarket/Ecomarket";
import { CollectionPoints } from "./pages/CollectionPoints/CollectionPoints";
import { AboutService } from "./pages/AboutService/AboutService";
import { Profile } from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import { MobileHeader } from "./components/MobileHeader/MobileHeader";
import PromocodeContainer from "./containers/PromocodeContainer/PromocodeContainer";
import HistoryContainer from "./containers/HistoryContainer/HistoryContainer";
import CollPointsFullContainer from "./containers/CollPointsFullContainer/CollPointsFullContainer";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/promo" element={<PromocodeContainer />} />
          <Route path="/profile/history" element={<HistoryContainer />} />
        </Route>
        <Route path="/collpoints" element={<CollectionPoints />}>
          <Route path=":id" element={<CollPointsFullContainer />} />
        </Route>
        <Route path="/ecomarket" element={<Ecomarket />} />
        <Route path="/aboutservice" element={<AboutService />} />
      </Routes>
    </>


  );
};

export default App;
