import { useRouter } from "next/router";
import { IndexStyled } from "styled/Index.styled";

const Component = ({ data }) => {
  const router = useRouter();

  return (
    <IndexStyled>
      <h1>
        🚧 Tato stránka je zatím <em>Work In Progress</em>, zatím můžete
        vstoupit na portál. 🚧
      </h1>
      <button onClick={() => router.push("/dashboard")}>Vstoupit</button>
    </IndexStyled>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   // Check if session exists or not, if not, redirect
//   if (session == null) {
//     return {
//       redirect: {
//         destination: "/auth/not-authenticated",
//         permanent: true,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }

export default Component;

{
  /* <div>
  <Head>
    <title>Strapi - Next - NextAuth</title>
  </Head>
  <h1>{session ? "Authenticated" : "Not Authenticated"}</h1>
  {session && (
    <div style={{ marginBottom: 10 }}>
      <h3>Session Data</h3>
      <div>Email: {session.user.email}</div>
      <div>JWT from Strapi: Check console</div>
    </div>
  )}
  {session ? (
    <button onClick={() => signOut()}>Sign out</button>
  ) : (
    <Link href="/auth/sign-in">
      <button>Sign In</button>
    </Link>
  )}
  <Link href="/protected">
    <button
      style={{
        marginTop: 10,
      }}
    >
      Protected Page
    </button>
  </Link>
</div>; */
}
