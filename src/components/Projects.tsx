"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../../typing";

import { Tab } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/24/outline";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
  openGLProjects: Project[];
};

function Projects({ projects, openGLProjects }: Props) {
  const projectTabs = ["Frontend Projects", "OpenGL Projects"];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="md:left-row relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px]">
        Projects
      </h3>
      <div className="absolute top-24 h-full w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {projectTabs.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  selected
                    ? "w-full rounded-lg border-none bg-white/[0.12] py-2.5 text-sm font-medium leading-5 text-white shadow outline-none"
                    : "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white/50 hover:bg-white/[0.12] hover:text-white"
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel key={1} className="h-[700px] px-5">
              <div className="relative z-20 flex h-full w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects?.map((project, i) => (
                  <div
                    key={project._id}
                    className="pt-15 flex w-full flex-shrink-0 snap-center flex-col items-center justify-center space-y-3"
                  >
                    <motion.img
                      initial={{
                        y: -300,
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                      src={urlFor(project?.image).url()}
                      alt="Project"
                      className="relative mx-auto max-h-[450px] max-w-full object-contain"
                    />
                    <div className="mt-2 max-w-6xl space-y-4 px-0 md:px-10">
                      <h4 className="text-center text-3xl font-semibold">
                        {project?.title}
                      </h4>
                      <p className="line-clamp-2 space-y-4 text-center text-lg text-white/50 hover:line-clamp-none md:text-left">
                        {project?.summary}
                      </p>
                      <div className="mt-3 flex flex-row gap-x-3">
                        <div className="space-x-2">
                          {project?.technologies.map((technology) => (
                            <span
                              key={technology._id}
                              className="inline-flex h-7 items-center self-start rounded-md px-2 py-1 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/10"
                            >
                              {technology.title}
                            </span>
                          ))}
                        </div>
                        <a href={project.linkToBuild} className="ml-auto">
                          <LinkIcon className="h-6 w-6 text-white/70 hover:text-white" />
                        </a>
                        <a href={project.githubUrl}>
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-7 w-7 fill-white/70 hover:fill-white"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel
              key={2}
              className="h-[700px] overflow-y-auto overflow-x-hidden scrollbar-none"
            >
              <motion.div
                initial={{
                  x: 300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex h-full w-screen justify-center bg-gray-900 py-10 pl-16 pr-20"
              >
                <div className="grid grid-cols-12 gap-16">
                  {openGLProjects?.map((openGLProject, i) => (
                    <div
                      key={openGLProject._id}
                      className="col-span-12 sm:col-span-6 md:col-span-4"
                    >
                      <div className="flex w-full flex-col">
                        <div className="relative">
                          <div className="aspect-h-9 aspect-w-16">
                            <iframe
                              src={openGLProject.linkToBuild}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>

                        <div className="mt-2 flex flex-row gap-2">
                          {/* <!-- Description --> */}
                          <div className="flex flex-col">
                            <a href="#">
                              <p className="line-clamp-1 text-lg font-semibold text-gray-100 hover:line-clamp-none">
                                {openGLProject.title}
                              </p>
                            </a>
                            <a
                              className="mt-2 line-clamp-2 text-sm text-white/50 hover:line-clamp-none"
                              href="#"
                            >
                              {openGLProject.summary}
                            </a>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-row items-center justify-between">
                          <div className="space-x-2">
                            {openGLProject?.technologies.map((technology) => (
                              <span
                                key={technology._id}
                                className="inline-flex h-7 items-center rounded-md px-2 py-1 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/10"
                              >
                                {technology.title}
                              </span>
                            ))}
                          </div>
                          <a href={openGLProject.githubUrl}>
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="h-7 w-7 fill-white/70 hover:fill-white"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
}

export default Projects;
