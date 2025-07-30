import { importJWK, SignJWT } from "jose";

export const generateSignedJwt = async () => {
  const { CLIENT_ID, TOKEN_URL, PRIVATE_KEY } = process.env;

  const header = { alg: "RS256", typ: "JWT" };

  const payload = {
    iss: CLIENT_ID,
    sub: CLIENT_ID,
    aud: TOKEN_URL,
  };

  const jwkJson = Buffer.from(PRIVATE_KEY!, "base64").toString();
  const jwk = JSON.parse(jwkJson);
  const privateKey = await importJWK(jwk, "RS256");

  return await new SignJWT(payload)
    .setProtectedHeader(header)
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(privateKey);
};
