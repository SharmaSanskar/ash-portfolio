import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github, Calendar, Tag, CheckCircle } from "lucide-react";
import Image from "next/image";

// Optional: define a Project type
type Project = {
  id: string;
  title: string;
  image: string;
  description?: string;
  longDescription?: string;
  category?: string;
  duration?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
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
      <DialogContent className="w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold text-dark-accent">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-dark-text leading-tight">
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

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            {project.category && (
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{project.category}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{project.duration}</span>
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <Button asChild className="flex items-center gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">
              About the Project
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
