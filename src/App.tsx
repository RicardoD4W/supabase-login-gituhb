import { useState, useEffect } from "react";
import { supabase } from "./supabase/client";

function App() {
  const [email, setEmail] = useState<string | null>(); // xD TypeScripts problems
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    checkUser();
    console.log(error);
  }, []);

  const signInWithGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    console.log("data: ", data);
    console.log("error: ", error);
  };

  const checkUser = async () => {
    const user = await supabase.auth.getUser();
    setEmail(user.data.user?.email);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setError(error);
    setEmail(null);
  };

  return (
    <>
      {email ? (
        <>
          <h1>Ya estas logueado</h1>
          {email && <p>{email}</p>}

          <button onClick={signOut}>LogOut</button>
        </>
      ) : (
        <>
          <h1>Bienvenido</h1>
          <p>Login with GitHub</p>
          <button onClick={signInWithGitHub}>LogIn</button>
        </>
      )}
    </>
  );
}

export default App;
