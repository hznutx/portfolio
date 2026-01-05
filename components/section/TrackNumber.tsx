"use client";

import { useEffect, useRef, useState } from "react";
import SectionFadeIn from "./SectionFadeIn";
import { supabase } from "@/utils/supabase/client";

const useCounter = (
  targetValue: number,
  duration: number = 2000,
  trigger: boolean
) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startValue = 0;
    const startTime = performance.now();

    const updateCounter = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1); // Normalize progress to [0, 1]
      const value = Math.floor(progress * targetValue);

      setCurrentValue(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [targetValue, duration, trigger]);

  return currentValue;
};

const TrackNumberSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
   const [statData, setStatData] = useState([] as any[]);

    useEffect(() => {
      supabase.from("stat").select('*').then(({ data }) => {
        setStatData(data ?? []);
      });
    }, []);


  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Viewport
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const yearsInBusiness = useCounter(statData[0]?.count, 2000, isVisible);
  const projectsDelivered = useCounter(statData[1]?.count, 2000, isVisible);
  const teamMembers = useCounter(statData[2]?.count, 2000, isVisible);

  return (
   <SectionFadeIn sectionRef={sectionRef}>
      <div className="pt-40 lg:pt-0 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {yearsInBusiness}+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Years in business
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Creating the successful path
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {projectsDelivered}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Projects delivered
            </p>
            <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {teamMembers}+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Team members
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Working for your success
            </p>
          </div>
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default TrackNumberSection;
