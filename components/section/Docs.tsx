'use client';

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { CardProject } from "@/components/elements";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Docs() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("projects").select("*").then(({ data }) => {
      setData(data ?? []);
    });
  }, []);

  console.log('data:', data)

  return (

    <div className="relative py-16 lg:py-24 container mx-auto max-w-6xl grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
      {data.map(item => (
        <CardProject
          key={item.id}
          title={item.name}
          src={'https://cdn.pixabay.com/photo/2025/12/16/17/04/junco-10018717_1280.jpg'}
          content={item.code}
          button="Read More"
        />
      ))}
    </div>

  );
}
