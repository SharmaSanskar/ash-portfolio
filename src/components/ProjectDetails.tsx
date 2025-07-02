import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, Tag, CheckCircle } from "lucide-react";
import Image from "next/image";

// Optional: define a Project type
type Project = {
  id: string;
  title: string;
  coverMedia: string;
  description?: string;
  overview?: string;
  designApproach?: string;
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
};

type ProjectDetailsProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectDetails({
  project,
  isOpen,
  onClose,
}: ProjectDetailsProps) {
  if (!project) return null;

  // Helper function to check if media is video
  const isVideo = (mediaPath: string) => {
    return mediaPath.endsWith('.mp4') || mediaPath.endsWith('.mov') || mediaPath.endsWith('.webm');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-sm sm:max-w-2xl lg:!max-w-6xl mx-auto max-h-[90vh] overflow-y-auto border-light-accent/20 p-6 sm:p-8 lg:p-10" style={{ backgroundColor: '#faedcd' }}>
        <DialogHeader className="space-y-2 sm:space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1 sm:space-y-2 flex-1 min-w-0 pr-2">
              <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-dark-accent leading-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base lg:text-lg text-dark-text leading-tight">
                {project.description}
              </DialogDescription>
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-dark-text/70">
            {project.category && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3 sm:h-4 sm:w-4 text-dark-accent" />
                <span>{project.category}</span>
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6">
          <div className="relative w-full overflow-hidden bg-light-accent/10">
            {isVideo(project.coverMedia) ? (
              <video
                className="w-full h-auto"
                controls
                muted
                playsInline
              >
                <source src={project.coverMedia} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                <Image
                  src={project.coverMedia}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '50vh' }}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            {project.liveUrl && (
              <Button asChild className="flex items-center justify-center gap-2 text-sm bg-dark-accent hover:bg-dark-accent/90 text-light-bg w-full sm:w-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="flex items-center justify-center gap-2 text-sm border-dark-accent/20 text-dark-text hover:bg-dark-accent/5 w-full sm:w-auto"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>

          <Separator className="bg-light-accent/20" />

          {project.overview && (
            <>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-dark-accent">
                  Overview
                </h3>
                <p className="text-sm sm:text-base text-dark-text leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <Separator className="bg-light-accent/20" />
            </>
          )}

          {project.designApproach && (
            <>
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-dark-accent">
                  Design Approach
                </h3>
                <p className="text-sm sm:text-base text-dark-text leading-relaxed">
                  {project.designApproach}
                </p>
              </div>

              <Separator className="bg-light-accent/20" />
            </>
          )}

          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-dark-accent">
              Key Features
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-dark-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-dark-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
