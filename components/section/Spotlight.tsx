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

    <div className="relative p-5 py-16 lg:py-24 container mx-auto max-w-6xl w-auto grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
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
