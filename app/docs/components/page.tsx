import { title } from "@/components/primitives"
import { ComponentsOverview } from "@/components/section"

const ComponentsOverviewPage = () => {
  return (
    <>
      <h1 className={title()}>Components Opensource</h1>
      <ComponentsOverview />
    </>
  )
}
export default ComponentsOverviewPage