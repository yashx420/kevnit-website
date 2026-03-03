"use client";

import { LoadingProvider } from "@/context/LoadingContext";
import { Preloader } from "@/components/ui/Preloader";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { BackgroundSpotlight } from "@/components/ui/BackgroundSpotlight";
import { GrainNoise } from "@/components/ui/GrainNoise";
import { ReactNode } from "react";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LoadingProvider>
      <Preloader />
      <SmoothScroll />
      <CustomCursor />
      <BackgroundSpotlight />
      <GrainNoise />
      {children}
    </LoadingProvider>
  );
}
