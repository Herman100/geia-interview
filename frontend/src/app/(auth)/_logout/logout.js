import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

export async function logoutUser() {
  const { logout } = useAuth;
  const router = useRouter();
  try {
    await logout();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
}
