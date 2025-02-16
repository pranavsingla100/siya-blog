import jwt from "jsonwebtoken";
import { errorHandler } from "./error.mjs";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized, Signin to continue"));
  }
// process.env.JWT_SECRET
  jwt.verify(token,"javainuse-secret-key" , (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
