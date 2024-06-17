import BeforLoginheader from "@/components/BeforLoginheader";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BeforLoginheader />
      {children}
    </div>
  );
}
