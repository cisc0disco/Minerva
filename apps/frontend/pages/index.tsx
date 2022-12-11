import { useSession, signIn, getSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Component = ({ data }) => {
  const [newUserStatus, setNewUserStatus] = useState(null);
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log("session.jwt", session.jwt);
    console.log(session);
  }, [session]);

  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     const res = await fetch("http://localhost:3000/api/userExists");
  //     const json = await res.json();
  //     setNewUserStatus(json["newUser"]);
  //   };

  //   fetchStatus().catch(console.error);
  // }, []);

  // if (session && newUserStatus) {
  //   router.push("/register");
  // } else if (session && !newUserStatus) {
  //   return (
  //     <MainStyled>
  //       <SideBar
  //         activeCategory={activeCategory}
  //         setActiveCategory={setActiveCategory}
  //       />
  //       {activeCategory == "presentation" && <Presentations props={data} />}
  //     </MainStyled>
  //   );
  // }

  // if (!session) {
  //   signIn();
  // }

  return (
    <div>
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
    </div>
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
