import { Router } from "express";
import { generateToken } from "authenticator";
import { TOTP } from "totp-generator";

const router = Router();

router.post("/signup", (req, res) => {
  const body = req.body.number;
  // const { otp } = TOTP.generate(body, {
  //   digits: 6,
  //   algorithm: "SHA-512",
  //   period: 60,
  //   timestamp: 90,
  // });
  // res.json({
  //   otp,
  // });
  const totp = generateToken(body + "Signup");
  res.json({
    totp,
  });
});

router.post("/signin", (req, res) => {});

export default router;
