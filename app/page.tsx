import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image'
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main >
      <div>
        <div className="p-10 flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox <br />
            <br />
            Storing everything for you and your business needs
          </h1>
          <p className="pb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non nesciunt, tempora nam nihil magnam minima ea accusantium architecto 
            eos vitae labore odio cupiditate iure perferendis id adipisci accusamus quas.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non nesciunt, tempora nam nihil magnam minima ea accusantium architecto eos vitae labore odio cupiditate iure perferendis id adipisci accusamus quas.
          </p>
          <Link href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div>
          <video autoPlay loop muted className="rounded-lg" >
            <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            type="video/mp4"
            />
          </video>
          
          
        </div>
      </div>
    </main>
  )
}
