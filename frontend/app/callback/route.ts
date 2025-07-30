import { generateSignedJwt } from "@/utils/jwt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const cookieStore = await cookies();
  const savedState = cookieStore.get("state")?.value;
  const codeVerifier = cookieStore.get("code_verifier")?.value;

  if (state !== savedState || !codeVerifier || !code) {
    return new Response("Invalid state or code", { status: 400 });
  }

  const signedJwt = await generateSignedJwt();

  const tokenRes = await fetch(process.env.TOKEN_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.REDIRECT_URI!,
      client_id: process.env.CLIENT_ID!,
      code_verifier: codeVerifier,
      client_assertion: signedJwt,
      client_assertion_type:
        process.env.CLIENT_ASSERTATION_TYPE ||
        "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    }),
  });

  if (!tokenRes.ok) {
    const err = await tokenRes.json().catch(() => ({}));
    console.error("Token exchange failed:", err);
    return new Response("Token exchange failed", { status: 500 });
  }

  const { access_token } = await tokenRes.json();

  cookieStore.set(
    "access_token",
    access_token,
    {
      path: "/",
      maxAge: 60 * 60 * 24,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    }
  );

  return redirect("/dashboard");
}
