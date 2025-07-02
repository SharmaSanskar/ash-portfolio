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
      <div className="min-h-screen py-12 mx-auto max-w-6xl">
        <h2 className="text-7xl font-bold font-display mb-8 text-dark-accent  tracking-wider uppercase">
          My Work
        </h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px] px-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.size} relative group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center px-4 transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-light-text/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetails
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
