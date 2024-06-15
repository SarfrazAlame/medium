import Header from "@/components/Header";
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
        <div className="flex mx-auto">
          <div className="flex flex-col w-full items-center border-r">
            <div className="flex flex-col lg:w-4/5">
              <div className="">
                <MiniHed />
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/4">leftside</div>
      </div>
    </div>
  );
}
