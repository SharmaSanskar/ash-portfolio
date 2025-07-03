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
import MediaCarousel from "./MediaCarousel";

// Optional: define a Project type
type Project = {
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[320px] min-[400px]:max-w-[380px] sm:max-w-2xl lg:!max-w-6xl mx-auto max-h-[95vh] overflow-y-auto overflow-x-hidden border-light-accent/20 p-2 min-[400px]:p-3 sm:p-6 lg:p-8" style={{ backgroundColor: '#faedcd' }}>
        <DialogHeader className="space-y-1 min-[400px]:space-y-2 sm:space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-1 min-[400px]:space-y-1.5 sm:space-y-2 flex-1 min-w-0 pr-1">
              <DialogTitle className="text-sm min-[400px]:text-base sm:text-lg lg:text-2xl font-bold text-dark-accent leading-tight break-words">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-xs min-[400px]:text-sm sm:text-base lg:text-lg text-dark-text leading-tight break-words">
                {project.description}
              </DialogDescription>
            </div>
          </div>

          <div className="flex flex-col min-[400px]:flex-row min-[400px]:flex-wrap items-start min-[400px]:items-center gap-1.5 min-[400px]:gap-2 sm:gap-4 text-xs sm:text-sm text-dark-text/70">
            {project.category && (
              <div className="flex items-center gap-1">
                <Tag className="h-3 w-3 min-[400px]:h-3.5 min-[400px]:w-3.5 sm:h-4 sm:w-4 text-dark-accent flex-shrink-0" />
                <span className="text-xs min-[400px]:text-sm break-words">{project.category}</span>
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-3 min-[400px]:space-y-4 sm:space-y-6 overflow-x-hidden">
          <div className="w-full overflow-hidden">
            <MediaCarousel 
              media={project.media}
              coverMedia={project.coverMedia}
              projectTitle={project.title}
            />
          </div>

          <div className="flex flex-col gap-2 min-[400px]:gap-3 sm:flex-row sm:gap-3">
            {project.liveUrl && (
              <Button asChild className="flex items-center justify-center gap-1.5 min-[400px]:gap-2 text-xs min-[400px]:text-sm bg-dark-accent hover:bg-dark-accent/90 text-light-bg w-full sm:w-auto px-3 min-[400px]:px-4 py-2 min-[400px]:py-2.5 h-auto min-h-[36px] min-[400px]:min-h-[40px]">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 min-[400px]:gap-2 w-full"
                >
                  <ExternalLink className="h-3 w-3 min-[400px]:h-3.5 min-[400px]:w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="truncate">Live Demo</span>
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="flex items-center justify-center gap-1.5 min-[400px]:gap-2 text-xs min-[400px]:text-sm border-dark-accent/20 text-dark-text hover:bg-dark-accent/5 w-full sm:w-auto px-3 min-[400px]:px-4 py-2 min-[400px]:py-2.5 h-auto min-h-[36px] min-[400px]:min-h-[40px]"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 min-[400px]:gap-2 w-full"
                >
                  <Github className="h-3 w-3 min-[400px]:h-3.5 min-[400px]:w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="truncate">View Code</span>
                </a>
              </Button>
            )}
          </div>

          <Separator className="bg-light-accent/20 my-2 min-[400px]:my-3 sm:my-4" />

          {project.overview && (
            <div className="space-y-1.5 min-[400px]:space-y-2 sm:space-y-3">
              <h3 className="text-sm min-[400px]:text-base sm:text-lg lg:text-xl font-semibold text-dark-accent">
                Overview
              </h3>
              <p className="text-xs min-[400px]:text-sm sm:text-base text-dark-text leading-relaxed break-words">
                {project.overview}
              </p>
            </div>
          )}

          {project.designApproach && (
            <>
              <Separator className="bg-light-accent/20 my-2 min-[400px]:my-3 sm:my-4" />
              <div className="space-y-1.5 min-[400px]:space-y-2 sm:space-y-3">
                <h3 className="text-sm min-[400px]:text-base sm:text-lg lg:text-xl font-semibold text-dark-accent">
                  Design Approach
                </h3>
                <p className="text-xs min-[400px]:text-sm sm:text-base text-dark-text leading-relaxed break-words">
                  {project.designApproach}
                </p>
              </div>
            </>
          )}

          <Separator className="bg-light-accent/20 my-2 min-[400px]:my-3 sm:my-4" />

          <div className="space-y-1.5 min-[400px]:space-y-2 sm:space-y-3">
            <h3 className="text-sm min-[400px]:text-base sm:text-lg lg:text-xl font-semibold text-dark-accent">
              Key Features
            </h3>
            <ul className="space-y-1.5 min-[400px]:space-y-2 sm:space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 min-[400px]:h-4 min-[400px]:w-4 sm:h-5 sm:w-5 text-dark-accent mt-0.5 flex-shrink-0" />
                  <span className="text-xs min-[400px]:text-sm sm:text-base text-dark-text leading-relaxed break-words">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
