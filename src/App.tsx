import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import RoadmapPage from "./components/roadmap/RoadmapPage";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
