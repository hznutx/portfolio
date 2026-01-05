'use client'
import { useEffect, useRef, useState } from "react";
import SectionFadeIn from "./SectionFadeIn";
import { supabase } from "@/utils/supabase/client";

interface IProfileData {
  id: number
  title: string
  email: string
  contact: string
  github: string
  image_url: string
  description: string
}

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [infoData, setInfoData] = useState<IProfileData>({} as IProfileData);

  useEffect(() => {
    supabase.from("about").select('*').then(({ data }) => {
      const rawData = data?.at(0) as IProfileData ?? {}
      setInfoData(rawData);
    });
  }, []);

  return (
    <SectionFadeIn id="about" sectionRef={sectionRef}><div className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative flex-shrink-0 w-48 h-48">
            <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
            <img
              className="relative object-cover w-48 h-48 rounded-full"
              src={infoData?.image_url}
              alt={infoData?.title}
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl whitespace-break-spaces text-black">
                {infoData?.description}
              </p>
            </blockquote>
            <p className="text-lg font-semibold text-black mt-7">
              {infoData?.title}
            </p>
            <p className="mt-1 text-base text-gray-600">
              {infoData?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
    </SectionFadeIn>
  );
};
export default About;
