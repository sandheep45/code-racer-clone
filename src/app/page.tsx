import HeroBanner from "@/components/shared/HeroBanner";
import BannerSvg from "@/components/shared/BannerSvg";

const Page = () => {
  return (
    <main className="w-full grow h-fit flex flex-col justify-center min-h-[85vh]">
      <div className="flex flex-col items-center justify-between md:flex-row w-full mt-auto">
        <HeroBanner />
        <BannerSvg
          gearRightClass={"origin-[50%_50%] animate-gear-rotate-left"}
          gearLeftClass={"origin-[50%_50%] animate-gear-rotate-right"}
        />
      </div>
    </main>
  );
};

export default Page;
