"use client";

import { Project } from "@/app/lib/types";
import { HoverFocusProvider } from "@/app/lib/utils/HoverFocusProvider";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import Image from "next/image";
import ArrowRightIcon from "../icons/arrow-right";
import Link from "next/link";
import CustomBlocksRenderer from "./custom-blocks-renderer";

const MAX_VISIBLE_SKILLS = 3;

export function ProjectComponent({
  project,
  viewLiveLabel,
}: {
  project: Project;
  viewLiveLabel: string;
}) {
  const visibleSkills = project.skills.slice(0, MAX_VISIBLE_SKILLS);
  const hiddenCount = project.skills.length - MAX_VISIBLE_SKILLS;

  return (
    <Dialog>
      <HoverFocusProvider
        render={(state) => (
          <DialogTrigger asChild>
            <button
              className={clsx(
                "md:px-6 mb-3 pt-[10px] pb-[15px] rounded-[10px] transition-all ease-in-out duration-300 w-full text-left cursor-pointer",
                state
                  ? "opacity-100 bg-projectBg shadow-[0px_0px_3px_0px] shadow-projectShadow"
                  : "opacity-70",
              )}
            >
              <div className="flex justify-between border-b">
                <div className="flex items-center">
                  <div
                    className={clsx(
                      "text-sm font-medium leading-6 transition-all ease-in-out duration-300",
                      { "text-accent": state },
                    )}
                  >
                    {project.name}
                  </div>
                  <ArrowRightIcon
                    className={clsx(
                      "ml-[7px] transition-all ease-in-out duration-300",
                      { "w-[15px] h-[15px] text-accent -rotate-45": state },
                    )}
                  />
                </div>
                <div className="text-xs text-lightBlue leading-6">
                  ({project.date?.slice(0, 4)})
                </div>
              </div>
              <div className="mt-3 flex">
                <Image
                  src={project.thumbnail.url}
                  alt={project.thumbnail.alternativeText || "project-thumbnail"}
                  width={129}
                  height={86}
                  className="w-[129px] h-[86px] flex-shrink-0 rounded"
                />
                <div className="ml-5 text-sm leading-[18.2px] overflow-hidden">
                  <div className="line-clamp-3">
                    <CustomBlocksRenderer content={project.description || []} />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-[10px]">
                    {visibleSkills.map((skill, index) => (
                      <Badge key={index} variant="custom">
                        {skill.name}
                      </Badge>
                    ))}
                    {hiddenCount > 0 && (
                      <Badge variant="custom">+{hiddenCount}</Badge>
                    )}
                  </div>
                </div>
              </div>
            </button>
          </DialogTrigger>
        )}
      />

      <DialogContent>
        <DialogTitle className="text-accent text-lg font-medium pr-6">
          {project.name}
          <span className="text-lightBlue text-sm font-light ml-2">
            ({project.date?.slice(0, 4)})
          </span>
        </DialogTitle>

        <Image
          src={project.thumbnail.url}
          alt={project.thumbnail.alternativeText || "project-thumbnail"}
          width={480}
          height={320}
          className="w-full rounded-lg mt-2"
        />

        <div className="mt-4 text-sm leading-[18.2px]">
          <CustomBlocksRenderer content={project.description || []} />
        </div>

        <div className="mt-4 flex flex-wrap gap-[10px]">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="custom">
              {skill.name}
            </Badge>
          ))}
        </div>

        <Link
          href={project.projectUrl}
          target="_blank"
          className="mt-4 inline-flex items-center text-accent text-sm font-medium underline underline-offset-[3px] decoration-1 hover:no-underline transition-all ease-in-out duration-300"
        >
          {viewLiveLabel}
          <ArrowRightIcon className="ml-1 w-[15px] h-[15px] -rotate-45" />
        </Link>
      </DialogContent>
    </Dialog>
  );
}
