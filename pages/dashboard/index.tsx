//dirty cesta jak obejít requesty na folder dashboard TODO: FIX

import { getSession } from "next-auth/react";

export default function Index() {}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard/home",
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/sign-in",
      },
    };
  }
}
