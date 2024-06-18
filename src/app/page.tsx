import { getAuthOptions } from "@/auth/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getAuthOptions();
  const userId = session?.user.id;

  console.log(userId);

  if (userId) {
    return redirect("/dashboard");
  } else {
    return redirect("/login");
  }
};

export default page;
