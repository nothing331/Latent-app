import axios from "axios";
import { describe, expect, it, test } from "vitest";

const BACKEND_API = "http://localhost:8080";

const PHONE_NUMBER_1 = "1234567890";
const NAME = "Ayush";

describe("Signup endpoints", async () => {
  it("Double Signup is not Allowed", async () => {
    const response1 = await axios.post(`${BACKEND_API}/api/v1/signup`, {
      number: PHONE_NUMBER_1,
    });
    const response2 = await axios.post(`${BACKEND_API}/api/v1/signup/verify`, {
      name: NAME,
      otp: 111111,
    });
    expect(response1.status).toBe(200);
    expect(response1.status).toBe(200);
    expect(response1.data.id).not.toBeNull();

    expect(async () => {
      await axios.post(`${BACKEND_API}/api/v1/signup`, {
        number: PHONE_NUMBER_1,
      });
    }).toThrow();
  });
});
