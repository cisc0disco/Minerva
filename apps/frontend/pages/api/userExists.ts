import { unstable_getServerSession } from "next-auth/next";
import dbConnect from "../../db/dbConnect";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../db/models/User";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    await dbConnect();

    User.find({ email: session.user.email }).then((data) => {
      if (data.length > 0) {
        console.log(data.length);
        res.json({ newUser: false });
      } else {
        console.log(data.length);
        res.json({ newUser: true });
      }

      res.send();
    });
    //console.log("Session", JSON.stringify(session, null, 2));
  } else {
    res.status(400);
    res.send();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
