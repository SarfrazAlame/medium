import Header from "@/components/Header";

export default function StoryLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div>
        <Header/>
        {children}</div>;
  }
  