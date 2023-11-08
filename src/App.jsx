import { Routes, Route } from "react-router-dom";
import ScrollToTop from './helpers/scrollToTop';
import { Navbar } from './pages/navbar/Navbar';
import { routes } from "./routes";
import { Footer } from "./pages/footer/Footer";
import { aFG1concorde, aFG5Vandeuren, afgSteCroix, afghansBeguinage, afghansCharleroi, afghansPost, afghansTrone, av_auderghem, balmoral, chaussée, dailly, derby, ebola, gecamines, groupeBateau, haerne, lhosp, mdmBailli, mdmPrinceRoyale, mdmSaintMarie, mdmSteCat, michel_ange, minimes, philomene, pmJanBloc, poste, royale, saint_Lazare, senne, ursulines, vspAma, vspDim, vspHotel, vspLeo, vspMart, vspOlivier, vspRous, vspTous, zoneNeutre } from "./components/data";
import AfghanPost from "./components/details/afghanPost/AfghanPost";
import AfghansTrone from "./components/details/afghansTrone/AfghansTrone";
import AfghansCharleroi from "./components/details/afghansCharleroi/AfghansCharleroi";
import AfghansBeguinage from "./components/details/afghansBeguinage/AfghansBeguinage";
import Balmoral from "./components/details/balmoral/Balmoral";
import Ebola from "./components/details/ebola/Ebola";
import Gecamines from "./components/details/gecamines/Gecamines";
import Lhosp from "./components/details/lhosp/Lhosp";
import MdmBailli from "./components/details/mdmBailli/MdmBailli";
import MdmPrinceRoyale from "./components/details/mdmPrinceRoyale/MdmPrinceRoyale";
import MdmSaintMarie from "./components/details/mdmSaintMarie/MdmSaintMarie";
import Philomene from "./components/details/philomene/Philomene";
import VspAma from "./components/details/vspAma/VspAma";
import VspDim from "./components/details/vspDim/VspDim";
import VspHotel from "./components/details/vspHotel/VspHotel";
import VspLeo from "./components/details/vspLeo/VspLeo";
import VspMart from "./components/details/VspMart/VspMart";
import VspOlivier from "./components/details/VspOlivier/VspOlivier";
import VspRous from "./components/details/VspRous/VspRous";
import VspTous from "./components/details/VspTous/VspTous";
import ZoneNeutre from "./components/details/ZoneNeutre/ZoneNeutre";
import PmJanBloc from "./components/details/pmJanBloc/PmJanBloc";
import AfgSteCroix from "./components/details/afgSteCroix/AfgSteCroix";
import MdmSteCat from "./components/details/mdmSteCat/MdmSteCat";
import Senne from "./components/details/senne/Senne";
import Michel_Ange from "./components/details/michel_ange/Michel_Ange";
import Derby from "./components/details/derby/Derby";
import Haerne from "./components/details/haerne/Haerne";
import Av_auderghem from "./components/details/av_auderghem/Av_auderghem";
import Dailly from "./components/details/dailly/Dailly";
import Chaussee from "./components/details/chaussee/Chaussee";
import Ursulines from "./components/details/ursulines/Ursulines";
import Minimes from "./components/details/minimes/Minimes";
import Poste from "./components/details/poste/Poste";
import Royale from "./components/details/royale/Royale";
import Saint_Lazare from "./components/details/saint_Lazare/Saint_Lazare";
import AFG1concorde from "./components/details/aFG1concorde/AFG1concorde";
import AFG5Vandeuren from "./components/details/aFG5Vandeuren/AFG5Vandeuren";

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        <Route
          path="/posts/afghansPost"
          element={<AfghanPost afghansPost={afghansPost} />}
        />
        <Route
          path="/posts/afghansTrone"
          element={<AfghansTrone afghansTrone={afghansTrone} />}
        />
        <Route
          path="/posts/afghansCharleroi"
          element={<AfghansCharleroi afghansCharleroi={afghansCharleroi} />}
        />
        <Route
          path="/posts/afghansBeguinage"
          element={<AfghansBeguinage afghansBeguinage={afghansBeguinage} />}
        />
        <Route
          path="/posts/balmoral"
          element={<Balmoral balmoral={balmoral} />}
        />
        <Route
          path="/posts/ebola"
          element={<Ebola ebola={ebola} />}
        />
        <Route
          path="/posts/gecamines"
          element={<Gecamines gecamines={gecamines} />}
        />
        <Route
          path="/posts/lhosp"
          element={<Lhosp lhosp={lhosp} />}
        />
        <Route
          path="/posts/mdmBailli"
          element={<MdmBailli mdmBailli={mdmBailli} />}
        />
        <Route
          path="/posts/mdmPrinceRoyale"
          element={<MdmPrinceRoyale mdmPrinceRoyale={mdmPrinceRoyale} />}
        />
        <Route
          path="/posts/mdmSaintMarie"
          element={<MdmSaintMarie mdmSaintMarie={mdmSaintMarie} />}
        />
        <Route
          path="/posts/philomène"
          element={<Philomene philomene={philomene} />}
        />
        <Route
          path="/posts/vspAma"
          element={<VspAma vspAma={vspAma} />}
        />
        <Route
          path="/posts/vspDim"
          element={<VspDim vspDim={vspDim} />}
        />
        <Route
          path="/posts/vspHotel"
          element={<VspHotel vspHotel={vspHotel} />}
        />
        <Route
          path="/posts/vspLeo"
          element={<VspLeo vspLeo={vspLeo} />}
        />
        <Route
          path="/posts/vspMart"
          element={<VspMart vspMart={vspMart} />}
        />
        <Route
          path="/posts/vspOlivier"
          element={<VspOlivier vspOlivier={vspOlivier} />}
        />
        <Route
          path="/posts/vspRous"
          element={<VspRous vspRous={vspRous} />}
        />
        <Route
          path="/posts/toussaint"
          element={<VspTous vspTous={vspTous} />}
        />
        <Route
          path="/posts/zoneNeutre"
          element={<ZoneNeutre zoneNeutre={zoneNeutre} />}
        />
        <Route
          path="/posts/pmJanBloc"
          element={<PmJanBloc pmJanBloc={pmJanBloc} />}
        />
        <Route
          path="/posts/afgSteCroix"
          element={<AfgSteCroix afgSteCroix={afgSteCroix} />}
        />
        <Route
          path="/posts/mdmSteCat"
          element={<MdmSteCat mdmSteCat={mdmSteCat} />}
        />
        <Route
          path="/posts/senne"
          element={<Senne senne={senne} />}
        />
        <Route
          path="/posts/michel_ange"
          element={<Michel_Ange michel_ange={michel_ange} />}
        />
        <Route
          path="/posts/derby"
          element={<Derby derby={derby} />}
        />
        <Route
          path="/posts/haerne"
          element={<Haerne haerne={haerne} />}
        />
        <Route
          path="/posts/av_auderghem"
          element={<Av_auderghem av_auderghem={av_auderghem} />}
        />
        <Route
          path="/posts/dailly"
          element={<Dailly dailly={dailly} />}
        />
        <Route
          path="/posts/chaussée"
          element={<Chaussee chaussée={chaussée} />}
        />
        <Route
          path="/posts/ursulines"
          element={<Ursulines ursulines={ursulines} />}
        />
        <Route
          path="/posts/minimes"
          element={<Minimes minimes={minimes} />}
        />
        <Route
          path="/posts/poste"
          element={<Poste poste={poste} />}
        />
        <Route
          path="/posts/royale"
          element={<Royale royale={royale} />}
        />
        <Route
          path="/posts/saint_Lazare"
          element={<Saint_Lazare saint_Lazare={saint_Lazare} />}
        />
        <Route
          path="/posts/aFG1concorde"
          element={<AFG1concorde aFG1concorde={aFG1concorde} />}
        />
        <Route
          path="/posts/aFG5Vandeuren"
          element={<AFG5Vandeuren aFG5Vandeuren={aFG5Vandeuren} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
