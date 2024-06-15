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
      <div className="w-full flex border-r">
        <div className="flex">
          <div className="w-1/6"></div>
          <div className="flex flex-col md:w-3/4 items-center border-r">
            <div className="flex flex-col lg:w-4/5">
              <div className="">
                <MiniHed />
              </div>
              <div>{children}</div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">leftside</div>
        </div>
      </div>
    </div>
  );
}
