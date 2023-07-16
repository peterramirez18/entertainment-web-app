import Sidebar from "./components/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import BookMarked from "./pages/BookMarked";

function App() {

  return (
    <div className=" bg-dark-blue text-white h-screen">
      <BrowserRouter>
        <header className="md:pt-[24px] lg:py-[32px] h-screen">
          <Sidebar />
        </header>
        <main className=" mx-[--space] md:mx-[--space-tablet]">
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-series" element={<TvSeries />} />
              <Route path="/bookmarked" element={<BookMarked />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
