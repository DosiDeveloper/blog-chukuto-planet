import { useUser } from "@supabase/auth-helpers-react";
import TableAllHomeWorks from "../../components/allhomeworks";

export default function Homeworks() {
  const user = useUser();
  return <>{user ? <TableAllHomeWorks /> : <h1>Not access</h1>}</>;
}
