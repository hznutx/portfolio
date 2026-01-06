'use client';
import Image from "next/image";
import { SnipText } from "./Snippet";
import Link from "next/link";

export interface IComponentDisplay { id?: number; name: string; code: string; }
export interface IDocsMenu { id?: number; submenu: string; description: string; url: string }

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
      <div className="relative mx-4 -mt-8 h-44 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
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

export function htmlClassToClassName(html: string): string {
  return html.replace(/\bclass="([^"]*)"/g, 'className="$1"')
}


export const CardComponent: React.FC<IComponentDisplay> = ({ code, name, id }) => {

  const codeSet = htmlClassToClassName(code)

  return (
    <div id="components-sandbox">
      <p className="mb-3">{name}</p>
      <div className="shadow-sm rounded-xl grid container  mx-auto grid-cols-1 gap-3 place-content-center place-items-end md:grid-cols-2">
        <div className="w-full max-w-96">
          <div id="ui-preview" className="h-80 w-full flex justify-center items-center border border-default-50 rounded-2xl">
            < >

              <div  className="relative" dangerouslySetInnerHTML={{ __html: (code) }} />
            </>
          </div>
        </div>
        <div className="w-full md:w-96">
          <SnipText code={codeSet} /></div>
      </div>
    </div>
  )
}

export const CardDocument: React.FC<IDocsMenu> = ({ description, submenu, url }) => {
  return (
    <div
      className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
    >
      <div>
        <h1 className="text-[2em] font-medium">{submenu}</h1>
        <p className="text-[0.85em] line-clamp-2">
          {description}        </p>
      </div>
      <Link href={url}>
        <button
          className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
        >
          <p>Read More..</p>
          <svg
            className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
            stroke="currentColor"
            stroke-width="1"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </button></Link>
    </div>
  )
}

