import WriteHeader from "@/components/WriteHeader";

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <WriteHeader/>
    {children}
    </div>;
}
