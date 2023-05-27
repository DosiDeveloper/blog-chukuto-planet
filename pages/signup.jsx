import { Auth, AuthCard } from "@supabase/auth-ui-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Registration() {
  const supabaseClient = useSupabaseClient();
  return (
    <AuthCard>
      <Auth
        supabaseClient={supabaseClient}
        appearance={{ theme: ThemeSupa }}
        showLinks={false}
        providers={[]}
        redirectTo="http://localhost:3000/"
        view={"sign_up"}
      />
    </AuthCard>
  );
}
