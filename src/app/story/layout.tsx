import Header from "@/components/Header";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="flex w-full justify-center items-center">{children}</div>
    </div>
  );
}
