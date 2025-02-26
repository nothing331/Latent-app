import axios from "axios";
import { describe, expect, it, test } from "vitest";

const BACKEND_API = "http://localhost:8080";
// http://localhost:8080/api/v1/user/signup
const PHONE_NUMBER_1 = "12312312";
const NAME = "Ayush";

describe("Signup endpoints", () => {
  it("Double Signup is not Allowed", async () => {
    const response1 = await axios.post(`${BACKEND_API}/api/v1/user/signup`, {
      number: PHONE_NUMBER_1,
    });
    const response2 = await axios.post(
      `${BACKEND_API}/api/v1/user/signup/verify`,
      {
        name: "Ayush",
        otp: "000000",
      }
    );
    expect(response1.status).toBe(200);
    expect(response1.status).toBe(200);
    expect(response1.data.id).not.toBeNull();

    // expect(async () => {
    //   await axios.post(`${BACKEND_API}/api/v1/user/signup`, {
    //     number: PHONE_NUMBER_1,
    //   });
    // }).toThrow();
  });
});
