import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

async function signIn({ email, password }) {
  const res = await axios.post(`http://127.0.0.0:1337/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Sign in with Email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials == null) return null;

        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });
          return { ...user, jwt };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user.class = token.class;

      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      let newSession = {
        ...token,
      };

      if (user) {
        token.id = user.id;
        token.jwt = user.jwt;

        newSession = {
          ...user,
        };
      }

      return Promise.resolve(newSession);
    },
  },
};

export default NextAuth(authOptions);
