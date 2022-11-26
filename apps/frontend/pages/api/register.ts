import dbConnect from "../../db/dbConnect";
import User from "../../db/models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    console.log(req.body);

    const user = {
      name: req.body.name,
      email: req.body.email,
      class: req.body.class,
      username: req.body.username,
    };

    await User.find({ email: user.email }).then(async (data) => {
      if (data.length > 0) {
        res.status(401).end();
      } else {
        await User.create(user).then(() => {
          res.redirect("/");
        });
      }

      res.send();
    });
  } else {
    res.status(400).end();
  }
}
