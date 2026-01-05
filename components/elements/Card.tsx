'use client';
import Image from "next/image";
import { SnipText } from "./Snippet";

export interface IComponentDisplay { id?: number; name: string; code: string; }

interface ICard {
  title: string;
  content: string;
  src: string;
  button?: string;
  onClick?: () => void;
}

export function CardProject({
  title,
  content,
  src,
  button = "Read More", onClick
}: ICard) {
  return (
    <div className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-80 rounded-xl shadow-lg">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
        <Image
          src={src}
          alt={title}
          fill className="object-cover"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">{title}</h5>
        <p className="line-clamp-4 leading-5 text-sm font-light h-20 text-gray-700 whitespace-break-spaces">{content}</p>
      </div>
      <div className="p-6 pt-0 space-y-2">
        <button onClick={onClick} className="group relative w-full inline-flex items-center justify-center px-6 py-3 text-white rounded-lg bg-gradient-to-l from-primary to-secondary hover:opacity-90 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
          {button}
        </button>
      </div>
    </div>
  );
}


export const CardComponent: React.FC<IComponentDisplay> = ({ code, name, id }) => {
  return (
    <div id="components-sandbox">
      <p className="mb-3">{name}</p>
      <div className="shadow-sm rounded-xl grid container  mx-auto grid-cols-1 gap-3 place-content-center place-items-end md:grid-cols-2">
        <div className="w-full max-w-96">
          <div id="ui-preview" className="h-80 w-full bg-gray-300 flex justify-center items-center dark:bg-gray-800 rounded-2xl">
            <div dangerouslySetInnerHTML={{ __html: String(code) }} />
          </div>
        </div>
        <div className="w-full max-w-96">
          <SnipText code={code} /></div>
      </div>
    </div>
  )
}