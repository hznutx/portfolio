'use client';

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { CardProject } from "@/components/elements";
import { useRouter } from "next/navigation";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Spotlight() {
  const router = useRouter()
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("projects").select("*").then(({ data }) => {
      setData(data ?? []);
    });
  }, []);


  return (

    <div className="relative p-5 py-16 lg:py-24 container mx-auto w-fit max-w-6xl grid place-items-center place-content-center grid-cols-1 gap-8 gap-y-16 md:grid-flow-col">
      {data?.map(item => (
        <CardProject
          key={item?.id}
          title={item?.name}
          src={item?.image}
          content={item?.description} onClick={() => router.push(item?.url)} />
      ))}
    </div>

  );
}
