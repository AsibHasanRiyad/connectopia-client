import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/MainRoute.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <HelmetProvider>
        <AuthProvider>
          <Toaster position="top-right" />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    </ParallaxProvider>
  </React.StrictMode>
);
