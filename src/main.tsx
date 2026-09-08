import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/Login.tsx";
import Bar from "./layouts/Bar.tsx";
import DeveloperPage from "./pages/Developer.tsx";
import UserPage from "./pages/User.tsx";
import PrivateRouter from "./security/PrivateRouter.tsx";
import RegisterPage from "./pages/Register.tsx";
import UploaderPage from "./pages/Uploader.tsx";
import ValorantPage from "./pages/GamePage/Valorant.tsx";
import DeltaForcePage from "./pages/GamePage/DeltaForce.tsx";
import VideoPlayer from "./components/VideoPlayer.tsx";
import ApexPage from "./pages/GamePage/Apex.tsx";
import CSPage from "./pages/GamePage/CounterStrike.tsx";
import MyVideo from "./pages/UserVideo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Bar />}>
          <Route index element={<App />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="developer" element={<DeveloperPage />} />
          <Route path="deltaforce" element={<DeltaForcePage />} />
          <Route path="deltaforce/:id" element={<VideoPlayer />} />
          <Route path="valorant" element={<ValorantPage />} />
          <Route path="valorant/:id" element={<VideoPlayer />} />
          <Route path="apex" element={<ApexPage />} />
          <Route path="apex/:id" element={<VideoPlayer />} />
          <Route path="cs" element={<CSPage />} />
          <Route path="cs/:id" element={<VideoPlayer />} />
          <Route element={<PrivateRouter />}>
            <Route path="user" element={<UserPage />} />
            <Route path="user/upload" element={<UploaderPage />} />
            <Route path="user/myvideo" element={<MyVideo/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
