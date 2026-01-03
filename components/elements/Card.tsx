'use client';

import Image from "next/image";
import { SnipText } from "./Snippet";

interface ICard {
  title: string;
  content: string;
  src: string;
  button?: string;
}

export function CardProject({
  title,
  content,
  src,
  button = "Read More",
}: ICard) {
  return (
    <div className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-80 rounded-xl shadow-lg">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">{title}</h5>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">{content}</p>
      </div>
      <div className="p-6 pt-0 space-y-2">
      <SnipText code={content} />
        <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
          {button}
        </button>
      </div>
    </div>
  );
}
