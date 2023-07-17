import Sidebar from "./components/Sidebar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import BookMarked from "./pages/BookMarked";

function App() {

  return (
    <div className=" bg-dark-blue text-white min-h-screen flex flex-col lg:flex-row md:pt-[24px] lg:py-[32px] h-auto">
      <BrowserRouter>
        <header>
          <Sidebar />
        </header>
        <main className=" mt-[24px] mx-[--space] lg:ml-0 lg:mr-[--space-desktop] flex-1 ">
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
