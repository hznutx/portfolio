'use client';

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { CardProject } from "@/components/elements";
import { useRouter } from "next/navigation";
import { CardDocument, IDocsMenu } from "../elements/Card";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export default function Docs() {
  const router = useRouter()
  const [data, setData] = useState<IDocsMenu[]>([]);

  useEffect(() => {
    supabase.from("destination").select("*").then(({ data }) => {
      setData(data as IDocsMenu[] ?? []);
    });
  }, []);


  return (

    <div className="relative p-5 py-16 lg:py-24 container mx-auto max-w-6xl w-auto grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
      {data?.map(item => (
        <CardDocument
          key={item?.id}
          description={item?.description} submenu={item.submenu} url={item.url} />
      ))}
    </div>

  );
}
