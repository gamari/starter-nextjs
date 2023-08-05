import { useAuthContext } from "@/features/account/contexts/AuthContext";
import { Block } from "@/features/base/components/layout/Block";
import Link from "next/link";

export default function Home() {
  const { session, logout } = useAuthContext();

  return (
    <main>
      {session ? (
        <Block onClick={() => logout()}>ログアウト</Block>
      ) : (
        <Block>
          <Link href="/login">ログイン</Link>
        </Block>
      )}
    </main>
  );
}
