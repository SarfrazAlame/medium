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
      <div className="w-2/3 h-full border-r">
        <div className="flex flex-col w-2/3 justify-center items-center">
          <MiniHed />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
