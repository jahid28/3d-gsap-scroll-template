import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import KevinPage from './KevinPage.jsx'
import HydraPage from './HydraPage.jsx'
import KrakenPage from './KrakenPage.jsx';
import TeamPage from './TeamPage.jsx'
import VehiclesPage from './VehiclesPage.jsx'
import CompetitionsPage from './CompetitionsPage.jsx'
import ResearchPage from './ResearchPage.jsx'
import OutreachPage from './OutreachPage.jsx'
import SponsorsPage from './SponsorsPage.jsx'
import ContactPage from './ContactPage.jsx'
import LucyPage from './LucyPage.jsx';
// import FocusPage from './FocusPage.jsx';
import Robosub2025Page from './Robosub2025Page.jsx';
import Sauvc2025Page from './Sauvc2025Page.jsx';
import Materov2024Page from './Materov2024Page.jsx';
import Sauvc2024Page from './Sauvc2024Page.jsx';
import Pen3DPage from './Pen3DPage.jsx';
import YYSSPage from './YYSSPage.jsx';
import MarineVehiclePage from './MarineVehiclePage.jsx';
import ComputerVisionPage from './ComputerVisionPage.jsx';
import Blender3DPage from './Blender3DPage.jsx';
import JoinUsPage from './JoinUsPage.jsx';
import GamePage from './GamePage.jsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="kevin" element={<KevinPage />} />
          <Route path="hydra" element={<HydraPage />} />
          <Route path="kraken" element={<KrakenPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="vehicles" element={<VehiclesPage />} />
          <Route path="competitions" element={<CompetitionsPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="outreach" element={<OutreachPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="lucy" element={<LucyPage />} />
          {/* <Route path="focus" element={<FocusPage />} /> */}
          <Route path="robosub2025" element={<Robosub2025Page />} />
          <Route path="sauvc2025" element={<Sauvc2025Page />} />
          <Route path="materov2024" element={<Materov2024Page />} />
          <Route path="sauvc2024" element={<Sauvc2024Page />} />
          <Route path="3dpen" element={<Pen3DPage />} />
          <Route path="yyss" element={<YYSSPage />} />
          <Route path="marinevehicle" element={<MarineVehiclePage />} />
          <Route path="computervision" element={<ComputerVisionPage />} />
          <Route path="blender3d" element={<Blender3DPage />} />
          <Route path="joinus" element={<JoinUsPage />} />
          <Route path="game" element={<GamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
