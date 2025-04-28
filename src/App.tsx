// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherProvider } from "@/contexts/WeatherContext";
import Header from "@/components/Header";
import CurrentWeather from "@/components/CurrentWeather";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <WeatherProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-background">
              <Header />
              <main className="container mx-auto p-4">
                <CurrentWeather />
              </main>
              <Toaster />
              <Sonner />
            </div>
          </TooltipProvider>
        </WeatherProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;