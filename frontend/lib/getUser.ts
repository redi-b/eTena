import { cookies } from "next/headers";
import { decodeJwt } from "jose";

export async function getUser() {
  const cookieStore = await cookies();
  const access_token = cookieStore.get("access_token")?.value;

  if (!access_token) return null;

  try {
    const res = await fetch(process.env.USERINFO_URL!, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!res.ok) return null;

    const jwt = await res.text();
    return decodeJwt(jwt);
  } catch (err) {
    console.error("Failed to get user:", err);
    return null;
  }
}
