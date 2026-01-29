import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Title from "./Title"

import {
  SiBootstrap,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si"

const Projects = () => {

  const projects = [
    {
      title: "Feast Hub",
      tech: [SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
      Link: "https://github.com/akashsamala4/Feast-Hub",
      cover: "/FeastHub.png",
      background: "bg-green-600",
    },
    {
      title: "Logistics & Supply Chain Dashboard",
      tech: [SiJavascript, SiBootstrap],
      Link: "https://github.com/akashsamala4/Logistics-and-Supply-Chain-Dashboard",
      cover: "",
      background: "bg-blue-600",
    },
    {
      title: "Perplexity",
      tech: [SiJavascript, SiNextdotjs, SiReact, SiTailwindcss],
      Link: "https://perplexity-eight.vercel.app/",
      cover: "/Perplexity.png",
      background: "bg-cyan-500",
    },
    {
      title: "News-Mag",
      tech: [SiJavascript, SiReact, SiBootstrap, SiNodedotjs, SiExpress],
      Link: "https://newsmags.netlify.app/",
      cover: "/NewsMag.png",
      background: "bg-orange-500",
    },
    {
      title: "Shopping Cart (Redux Toolkit)",
      tech: [SiReact, SiRedux, SiTailwindcss],
      Link: "https://redux-toolkt-cart.vercel.app/",
      cover: "/ReduxToolkit.png",
      background: "bg-indigo-500",
    },
  ]

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((elem, index) => (
          <Link href={elem.Link} key={index} target="_blank">
            <div className={cn("p-5 rounded-md", elem.background)}>
              <DirectionAwareHover
                imageUrl={elem.cover}
                className="w-full space-y-5 cursor-pointer"
              >
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{elem.title}</h1>
                  <div className="flex items-center gap-5">
                    {elem.tech.map((Icon, index) => (
                      <Icon className="w-8 h-8" key={index} />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects