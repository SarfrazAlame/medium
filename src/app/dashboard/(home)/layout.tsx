import Header from "@/components/Header";
import LeftBar from "@/components/LeftBar";
import MiniHed from "@/components/MiniHed";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="w-full flex border-r mx-4">
        <div className="flex lg:w-3/4 xl:w-2/3 w-full mx-auto">
          <div className="flex flex-col md:w-2/3 items-center border-r">
            <div className="flex flex-col w-full">
              <div className="">
                <MiniHed />
              </div>
              <div>{children}</div>
            </div>
          </div>
          <div className="hidden md:block">
            <LeftBar />
          </div>
        </div>
      </div>
    </div>
  );
}