import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/PinCard";
import Image from "next/image";
import bg from "@/../public/bg.png";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A Small Selection Of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex justify-center items-center sm:w-96 w-[80vw] text-center"
          >
            <PinContainer title={title} href={link}>
              <div className="flex relative justify-center items-center h-[20vh] lg:h-[30vh] w-96 mb-10 overflow-hidden ">
                <div>
                  <Image src={bg} alt={title} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={500}
                  className="z-10 absolute bottom-0 "
                />
              </div>

              <h1 className="font-bold lg:text-lg md:text-base text-sm line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-base lg:font-normal font-light text-sm">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 text-nowrap">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        width={60}
                        height={60}
                        className="p-2"
                      />
                    </div>
                  ))}
                  <div className="flex justify-center items-center mx-4">
                    <p className="flex md:text-sm lg:text-lg text-xs text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
