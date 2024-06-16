import Header from "@/components/Header";
import LeftProfile from "@/components/LeftProfile";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="flex w-full justify-center items-center">
        <div className="w-1/2 border-r">{children}</div>
        <div className="w-1/6">
          <LeftProfile />
        </div>
      </div>
    </div>
  );
}
