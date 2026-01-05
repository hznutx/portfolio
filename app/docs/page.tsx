import { title } from "@/components/primitives";
import { Docs } from "@/components/section";

export default function DocsPage() {
  return (
    <>
      <h1 className={title()}>Docs</h1>
      <Docs />
    </>
  );
}
