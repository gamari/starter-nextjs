import { Block } from "@/features/base/components/Block";
import { useAuthContext } from "@/features/user/contexts/AuthContext";
import Link from "next/link";

export default function Home() {
  const { user, logout } = useAuthContext();

  return (
    <main>
      {user ? (
        <Block onClick={() => logout()}>ログアウト</Block>
      ) : (
        <Block>
          <Link href="/login">ログイン</Link>
        </Block>
      )}
    </main>
  );
}
