import Link from "next/link"
import Title from "./Title"
import { cn } from "@/lib/utils"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { SiReact, SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiRedux, SiFlask, SiNextdotjs, SiSupabase, SiBootstrap, SiNodedotjs, SiFastapi  } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";


const Projects = () => {

    const projects = [
      {
          title:"StoryMedia",
          tech: [SiNextdotjs, SiFastapi,SiJavascript,SiTailwindcss],
          Link: "https://story-media-five.vercel.app/",
          cover: "/StoryMedia.png",
          background:"bg-fuchsia-500"
        },
        
        {
            title:"Perplexity",
            tech: [SiJavascript,SiNextdotjs,SiReact, SiSupabase, SiTailwindcss],
            Link: "https://perplexity-eight.vercel.app/",
            cover: "/Perplexity.png",
            background:"bg-cyan-500"
          },
          {
          title:"Argo",
          tech: [SiJavascript,  SiReact, TbBrandNodejs,SiFlask, SiMongodb, SiExpress, SiTailwindcss],
          Link: "https://argo-xit.onrender.com/",
          cover: "/Argo.png",
          background:"bg-green-500"
        },
          {
            title:"News-Mag",
            tech: [SiJavascript,SiReact, SiBootstrap, SiNodedotjs, SiExpress],
            Link: "https://newsmags.netlify.app/",
            cover: "/NewsMag.png",
            background:"bg-orange-500"
          },
          {
            title:"Etsy Clone",
            tech: [SiHtml5, SiCss3, SiJavascript],
            Link: "https://eluruchandrika.github.io/etsy/",
            cover: "/etsy.png",
            background:"bg-pink-500"
          },
          {
            title:"Shopping Cart(Redux Toolkit)",
            tech: [SiReact, SiRedux, SiTailwindcss],
            Link: "https://redux-toolkt-cart.vercel.app/",
            cover: "/ReduxToolkit.png",
            background:"bg-indigo-500"
          },
          
         
          
    ]
  return (
    <div className="py-10 p-5 sm:p-0">
                <Title text="Projects 🎨" className="flex flex-col items-center justify-center rotate-6"/>

    <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((elem,index)=>{
            return <Link href={elem.Link} key={index}>
                        <div className={cn("p-5 rounded-md", elem.background)}>

                             <DirectionAwareHover
                                imageUrl={elem.cover}
                                className="w-full space-y-5 cursor-pointer"
                                >

                                  <div className="space-y-5">
                                  <h1 className="text-2xl font-bold">{elem.title}</h1>
                                  <div className="flex items-center gap-5">
                                    {elem.tech.map((Icon,index)=>{
                                      return <Icon className="w-8 h-8" key={index}/>
                                    })}
                                  </div>
                                  </div>
                             </DirectionAwareHover>
                        </div>
                    </Link>
        })}
    </div>

    </div>
  )
}

export default Projects