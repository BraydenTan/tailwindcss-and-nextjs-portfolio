import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Airbnb Clone ",
    description:
      "This blog is hosted on Vercel, Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023",
    image: "/airbnb.png",
    github: "https://github.com/BraydenTan/next13-airbnb-clone",
    link: "https://next13-airbnb.vercel.app/",
  },
  {
    name: "Breydan Blog",
    description:
      "This blog is hosted on Vercel, built with Next.js and Tailwind CSS using Tailwind Nextjs Starter Blog.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/BraydenTan/next_blog",
    link: "https://blog.breydan.com/",
  },
  {
    name: "Fengshui",
    description: "Chinese METAPHYSICS CONSULTANCY,build with wordpress and Laravel",
    image: "/platoio.png",
    github: "https://bazi.fredmunleong.com/",
    link: "https://bazi.fredmunleong.com/",
  },
  {
    name: "Gaming Genshin Impact Forum",
    description:
      "A forum for Genshin Impact players to discuss about the game. Build with Laravel Open source CMS",
    image: "/familyphotos.png",
    github: "https://www.forum.genshin.trade/",
    link: "https://www.forum.genshin.trade/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
