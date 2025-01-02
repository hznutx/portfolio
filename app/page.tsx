import {
  HeroSection,
  InfoSection,
  TrackNumberSection,
} from "@/components/section";

const HomePage = () => {
  return (
    <div className="relative mx-auto container max-w-screen-xxl">
      <HeroSection />
      <TrackNumberSection />
      <InfoSection />
    </div>
  );
};

export default HomePage;
