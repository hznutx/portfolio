import {Loading} from '@/components/elements';
import {Spotlight} from '@/components/section';
import {Suspense} from 'react';

export default function SpotlightPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Spotlight />
    </Suspense>
  );
}
