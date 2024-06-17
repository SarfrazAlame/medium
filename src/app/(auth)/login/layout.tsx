import BeforLoginheader from "@/components/BeforLoginheader";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-100 h-full">
      <BeforLoginheader />
      {children}
    </div>
  );
}
