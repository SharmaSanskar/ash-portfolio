"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectDetails from "./ProjectDetails";

// Define the shape of a project
export interface Project {
  id: string;
  title: string;
  image: string;
  size: string;
  description?: string;
  longDescription?: string;
  category?: string;
  duration?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
  features?: string[];
}

export default function WorkSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };

    loadProjects();
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="py-20 mx-auto max-w-6xl px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 sm:mb-12 text-dark-accent tracking-wider uppercase">
          My Work
        </h2>
        
        {/* Grid Container */}
        {projects.length >= 6 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 lg:grid-rows-2 gap-3 sm:gap-4 h-[800px] sm:h-[900px] lg:h-[500px]">
            {/* Project 1: Sophia College - Top Rectangle */}
            <div className="col-span-2 lg:col-span-1 row-span-1 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] rounded-lg"
                 onClick={() => handleProjectClick(projects[0])}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {projects[0].title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project 2: Offsuit Boston - Bottom Rectangle */}
            <div className="col-span-2 lg:col-span-1 row-span-1 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] rounded-lg"
                 onClick={() => handleProjectClick(projects[1])}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {projects[1].title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project 3: Campus Flyers - Left Tall Box */}
            <div className="col-span-1 row-span-2 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] rounded-lg"
                 onClick={() => handleProjectClick(projects[2])}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {projects[2].title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project 4: CBMA - Top Square */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] rounded-lg"
                 onClick={() => handleProjectClick(projects[3])}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {projects[3].title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project 5: Short-Form Video - Bottom Square */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] rounded-lg"
                 onClick={() => handleProjectClick(projects[4])}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={projects[4].image}
                  alt={projects[4].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {projects[4].title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project 6: We Will Lead Africa - Right Tall Box */}
            <div className="col-span-1 row-span-2 relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] rounded-lg"
                 onClick={() => handleProjectClick(projects[5])}>
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={projects[5].image}
                  alt={projects[5].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold text-center transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg leading-tight">
                  {projects[5].title}
                </h3>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark-accent mx-auto mb-4"></div>
              <p className="text-dark-text">Loading projects...</p>
            </div>
          </div>
        )}
      </section>

      <ProjectDetails
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
