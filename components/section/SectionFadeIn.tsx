"use client";

import { useEffect, useState } from "react";

interface ILayoutSection {
    children: React.ReactNode, sectionRef: React.RefObject<HTMLDivElement>; id?: string
}

const SectionFadeIn: React.FC<ILayoutSection> = ({ children, sectionRef, id }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
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


    return (
        <section id={id}
            ref={sectionRef}
            className={`${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                } py-10 sm:py-16 lg:py-24 transition-transform duration-800`}
        >{children}
        </section>
    );
};

export default SectionFadeIn;
