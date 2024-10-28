const {getUser} = require("../service/auth");

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  if (!tokenCookie) {
    return next();
  }
  req.user = getUser(tokenCookie);
  return next();
}

function restrictTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("Unauthorized!");

    return next();
  };
}

module.exports = {checkForAuthentication, restrictTo};
