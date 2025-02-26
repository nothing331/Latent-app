import { Router } from "express";
import { generateToken, verifyToken } from "authenticator";
import { TOTP } from "totp-generator";

const router = Router();

router.post("/signup", (req, res) => {
  const body = req.body.number;

  const totp = generateToken(body + "Signup");
  // Send the otp to the mobile no. via sms
  res.json({
    id: "1",
    otp:totp
  });
});

router.post("/signup/verify", (req, res) => {
  const body = req.body.number;
  if (!verifyToken(body + "Signup", req.body.otp)) {
    res.json({
      message: "Invalid Token",
    });
    return;
  }
  res.json({
    message: "token is valid",
  });
});

router.post("/signin", (req, res) => {});

export default router;
