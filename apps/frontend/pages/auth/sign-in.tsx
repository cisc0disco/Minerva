import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { LoginStyled } from "styled/Login.styled";
import { WarningCircle } from "phosphor-react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (result.ok) {
      router.replace("/dashboard/home");
    }
    setError("Špatné údaje");
  };

  return (
    <LoginStyled>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="container">
        <h2>Přihlášení do portálu</h2>
        <form onSubmit={onSubmit}>
          {error && (
            <div className="alert">
              <WarningCircle size={22} color="#f3b5b4" weight="fill" /> {error}
            </div>
          )}
          <div className="input-container">
            <label className="required" htmlFor="email">
              Emailová adresa
            </label>
            <input
              required
              type="email"
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </div>
          <div className="input-container password">
            <label className="required" htmlFor="password">
              Heslo
            </label>
            <input
              required
              type="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>

          <button className="submit" type="submit">
            Přihlásit Se
          </button>
        </form>
      </div>
    </LoginStyled>
  );
}
