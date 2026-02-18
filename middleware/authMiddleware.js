import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ msg: "No token provided" });

  try {
    // remove Bearer
    const token = header.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // IMPORTANT → must be userId
    req.user = decoded.userId;

    next();
  } catch (err) {
    return res.status(401).json({err: err.message, msg: "Invalid token" });
    
  }
};

export default auth;
