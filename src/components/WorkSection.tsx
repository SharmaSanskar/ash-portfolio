"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectDetails from "./ProjectDetails";
import { projects } from "../data/projects";

// Define the shape of a project
export interface Project {
  id: string;
  title: string;
  coverMedia: string;
  media: string[];
  description?: string;
  overview?: string;
  designApproach?: string;
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to check if media is video
  const isVideo = (mediaPath: string) => {
    return mediaPath.endsWith('.mp4') || mediaPath.endsWith('.mov') || mediaPath.endsWith('.webm');
  };

  // Grid classes for each project position
  const gridClasses = [
    "col-span-2 lg:col-span-1 row-span-1", // Project 1: Sophia College - Top Rectangle
    "col-span-2 lg:col-span-1 row-span-1", // Project 2: Campus Flyers - Bottom Rectangle
    "col-span-1 row-span-2", // Project 3: Offsuit Boston - Left Tall Box
    "col-span-1 row-span-2", // Project 4: Short-Form Video - Tall Box
    "col-span-1 row-span-1", // Project 5: CBMA - Square
    "col-span-1 row-span-1"  // Project 6: We Will Lead Africa - Square
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleWritingSamplesClick = () => {
    window.open('https://drive.google.com/drive/folders/17y6vWJ-yNEtXrj2pVCVUJIFLZOpu6DRP?usp=drive_link', '_blank');
  };

  return (
    <>
      <section className="py-20 mx-auto max-w-6xl px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 sm:mb-12 text-dark-accent tracking-wider uppercase">
          My Work
        </h2>
        
        {/* Projects Grid Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-3 sm:gap-4 mb-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${gridClasses[index]} relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] min-h-[180px] sm:min-h-[200px] lg:min-h-[240px]`}
              onClick={() => handleProjectClick(project)}
              onMouseEnter={(e) => {
                if (isVideo(project.coverMedia)) {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.play().catch(() => {
                      // Handle play promise rejection silently
                    });
                  }
                }
              }}
              onMouseLeave={(e) => {
                if (isVideo(project.coverMedia)) {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                {isVideo(project.coverMedia) ? (
                  <video
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadStart={() => console.log(`Loading video: ${project.title}`)}
                    onLoadedData={() => console.log(`Video loaded: ${project.title}`)}
                    onError={(e) => console.error(`Video error for ${project.title}:`, e)}
                  >
                    <source src={project.coverMedia} type={project.coverMedia.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                    <source src={project.coverMedia} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={project.coverMedia}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {project.title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              
              {/* Video indicator for video cards */}
              {isVideo(project.coverMedia) && (
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center justify-center w-8 h-8">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Writing Samples Box */}
        <div 
          className="w-full h-48 sm:h-56 lg:h-64 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
          onClick={handleWritingSamplesClick}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/bg/bg-4.jpg"
              alt="Writing Samples"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-emerald-950/80 group-hover:bg-emerald-950/90 transition-colors duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg mb-2 sm:mb-3 lg:mb-4">
              Pieces I&apos;ve Written
            </h3>
            <p className="text-white/90 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed max-w-4xl transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md">
            My writing is clear, structured, and always thinking about the person reading it. Whether it&apos;s something emotional or something complex, I break it down without dumbing it down. I&apos;m big on flow, strong on voice, and never afraid to say things simply when simple works best.
            </p>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <ProjectDetails
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
