import { jwtDecode } from "jwt-decode";

export function decodeJwt(token) {
  try {
    const decoded = jwtDecode(token);

    return {
      email: decoded.sub,   // from setSubject(email)
      role: decoded.role    // custom claim
    };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}
