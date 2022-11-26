import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import Main from "./main";

const Component = () => {
  const { data: session } = useSession();
  const [newUserStatus, setNewUserStatus] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch("http://localhost:3000/api/userExists");
      const json = await res.json();
      setNewUserStatus(json["newUser"]);
    };

    fetchStatus().catch(console.error);
  }, []);

  if (session && newUserStatus) {
    router.push("/register");
  } else if (session && !newUserStatus) {
    console.log(session);
    return <Main />;
  }
  if (!session) {
    signIn();

    /*
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
    */
  }
};

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await unstable_getServerSession(req, res, authOptions),
    },
  };
}

export default Component;
