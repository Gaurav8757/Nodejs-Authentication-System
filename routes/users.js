const express = require("express");
const passport = require("passport");
require("../config/passport");
require("../config/facebook");
const authController = require("../controllers/authController");


const router = express.Router();
// ..................Routes page to get or post ................//
router.get("/register", authController.getRegisterPage);

router.post("/register", authController.register);

router.get("/login", authController.getLoginPage);

router.post("/login", authController.login);

router.get("/logout", authController.logout);

router.get("/forgotPassword", authController.getForgotPage);

router.post("/forgotPassword", authController.forgotPassword);

router.get("/changePassword", authController.getChangePassword);

router.post("/changePassword", authController.changePassword);

router.get("/resetPassword/:id/:token", authController.getResetPassword);

router.post("/resetPassword/:id/:token", authController.userPasswordReset);

router.get("/home", authController.getHomePage);

router.post('/home', authController.logout);

//................Google authentication route............................//
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

//.............Google authentication callback route.....................//
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/register",
  })
);
// .................Facebook authentication route........................//
router.get("/facebook", passport.authenticate("facebook"));
router.get(
  "/facebook/NodeJs",
  passport.authenticate("facebook", {
    successRedirect: "/home",
    failureRedirect: "/register",
  })
);
module.exports = router;
