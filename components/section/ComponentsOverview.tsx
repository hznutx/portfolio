'use client';

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { CardProject } from "@/components/elements";
import { CardComponent, IComponentDisplay } from "../elements/Card";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ComponentsOverview() {
  const [data, setData] = useState<IComponentDisplay[] | []>([]);

  useEffect(() => {
    supabase.from("components").select("*").then(({ data }) => {
      setData(data ?? []);
    });
  }, []);

  return (
    <div className="pt-10 flex flex-col gap-8">
      {data.map(item => (
        <CardComponent
          key={item.id}
          name={item.name}
          code={item.code}
        />
      ))}
    </div>

  );
}
