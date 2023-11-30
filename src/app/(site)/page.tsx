import TitleSection from "@/components/landing-page/title-section";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CLIENTS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function HomePage() {
  return (
    <>
      <section className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="Sua área de trabalho perfeita."
          title="Tudo em uma só plataforma produtiva e colaborativa."
          subheading=""
        />
        <div
          className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-auto
        ">
          <Button
            variant="secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          ">
            Use Workspress gratuitamente!
          </Button>
        </div>
        <div
          className="md:mt-[-90px]
        sm:w-full
        w-[750px]
        flex
        justify-center
        items-center
        mt-[-40px]
        relative
        sm:ml-0
        ml-[-50px]
        ">
          {" "}
          <Image src={Banner} alt="Application Banner" />
          <div
            className="bottom-0
          top-[50%]
          bg-gradient-to-t
          dark:from-background
          left-0
          right-0
          absolute
          z-10
          "></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
        ">
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          ">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[200px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  ">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      ">
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-10
          top-22
        "
        />
        <TitleSection
          title="Fique em controle das suas reuniões todas em um só lugar."
          subheading="Capture suas ideias, pensamentos e notas em um lugar estruturado e organizado."
          pill="Ferramentas"
        />
        <div
          className="mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300 
          border-opacity-10
        ">
          <Image src={Cal} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        ">
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}></div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
