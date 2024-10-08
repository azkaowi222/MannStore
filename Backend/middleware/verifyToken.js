import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const { token } = req.body;
  try {
    jwt.verify(token, "mysecretkey", (err, decoded) => {
      if (err)
        return res.status(401).json({ status: 401, msg: "Token Invalid" });
      return res.status(200).json({
        status: 200,
        msg: "Token is valid",
      });
    });
  } catch (error) {
    console.log(error);
  }
};
