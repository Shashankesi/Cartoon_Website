import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { AudioPlayer } from "@/components/AudioPlayer";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import Gadgets from "./pages/Gadgets";
import Lessons from "./pages/Lessons";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/gadgets" element={<Gadgets />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AudioPlayer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
