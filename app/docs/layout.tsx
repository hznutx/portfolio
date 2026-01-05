export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-full container mx-auto gap-4 py-8 md:py-10">
        {children}
    </section>
  );
}
