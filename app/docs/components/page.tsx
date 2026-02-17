import {PathDisplay} from '@/components/elements';
import {title} from '@/components/primitives';
import {ComponentsOverview} from '@/components/section';

const ComponentsOverviewPage = () => {
  return (
    <>
      <h1 className={title()}>Components Opensource</h1>
      <PathDisplay />
      <ComponentsOverview />
    </>
  );
};
export default ComponentsOverviewPage;
