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
      <div className="w-full h-full border-r flex">
        <div className="flex w-2/3 flex-col justify-center items-center border-r">
          <div>
            <div>
              <MiniHed />
            </div>
            <div>{children}</div>
          </div>
        </div>{" "}
        <div>leftside</div>
      </div>
    </div>
  );
}
