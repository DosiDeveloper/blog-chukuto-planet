import { Auth, AuthCard } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
  const supabaseClient = useSupabaseClient();

  return (
    <AuthCard>
      <Auth
        supabaseClient={supabaseClient}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        view={"sign_in"}
        redirectTo="http://localhost:3000/"
        showLinks={false}
      />
    </AuthCard>
  );
}
