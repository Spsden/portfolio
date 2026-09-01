"use client";

import HeroSection from "@/components/ui/sections/hero";
import Navbar from "@/components/ui/sections/navbar";
import { Experience } from "@/components/ui/sections/experience";
import Image from "next/image";
import { ReactNode, useState } from "react";
import ProjectsGrid from "@/components/ui/sections/project";
import BlogPreview from "@/components/ui/sections/blog-preview";
import { PROJECTS } from "@/content/user-data";
import Footer from "@/components/ui/sections/footer";

type Props = {
  children?: ReactNode;
  className?: string;
};

export function PageContainer({ children, className = "" }: Props) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <PageContainer>
        <HeroSection />
        <Experience />
        <ProjectsGrid projects={PROJECTS} />
        <BlogPreview />
      </PageContainer>
      <Footer />
    </>
  );
}
