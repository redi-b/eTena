import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  const state = crypto.randomBytes(16).toString("hex");
  const codeVerifier = crypto.randomBytes(32).toString("hex");
  const codeChallenge = base64URLEncode(sha256(codeVerifier));

  // Store state and code_verifier in cookies
  const cookieStore = await cookies();
  cookieStore.set("state", state, { httpOnly: true, path: "/" });
  cookieStore.set("code_verifier", codeVerifier, {
    httpOnly: true,
    path: "/",
  });

  const claims = {
    userinfo: {
      name: { essential: true },
      phone_number: { essential: true },
      email: { essential: true },
      gender: { essential: true },
      birthdate: { essential: true },
      address: { essential: true },
    },
    id_token: {},
  };

  const params = new URLSearchParams({
    client_id: process.env.CLIENT_ID!,
    response_type: "code",
    redirect_uri: process.env.REDIRECT_URI!,
    scope: "openid profile email",
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
    claims_locales: "en am",
    claims: JSON.stringify(claims),
    acr_values: process.env.CLIENT_ASSERTATION_TYPE!,
  });

  const redirectUrl = `${process.env.AUTH_URL}?${params.toString()}`;
  return NextResponse.redirect(redirectUrl);
}

function sha256(input: string): Buffer {
  return crypto.createHash("sha256").update(input).digest();
}

function base64URLEncode(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
