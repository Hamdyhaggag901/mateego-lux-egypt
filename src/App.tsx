import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Journeys from "./pages/Journeys";
import SingleJourney from "./pages/SingleJourney";
import Destination from "./pages/Destination";
import TripPlanner from "./pages/TripPlanner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";
import Experiences from "./pages/Experiences";
import Inspiration from "./pages/Inspiration";
import AboutEgypt from "./pages/AboutEgypt";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/journeys" element={<Journeys />} />
      <Route path="/journeys/:slug" element={<SingleJourney />} />
      <Route path="/destinations/:slug" element={<Destination />} />
      <Route path="/plan" element={<TripPlanner />} />
      <Route path="/about" element={<About />} />
      <Route path="/about-egypt" element={<AboutEgypt />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/articles/:slug" element={<Article />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/inspiration" element={<Inspiration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
