"use client";

import { ReactNode } from "react";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster as Tonner } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
interface AppProps {
  children?: ReactNode;
}

// Create a query client instance
const queryClient = new QueryClient();

export default function App({ children }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Tonner />
        <Sonner />
        <main>{children}</main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
