export const isAuthenticated = (req, res, next) => {
  // Misalkan Anda menggunakan session atau token
  console.log(req.session.username);
  if (!req.session || !req.session.username) {
    console.log("unathorized");
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
