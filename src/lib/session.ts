
import { SignJWT, jwtVerify } from "jose";

type UserRole = "CLIENT" | "ANALYST" | "ADMIN";

type SessionPayload = {
  userId: string;
  role: UserRole;
};

const secretKey = process.env.SESSION_SECRET;

if (!secretKey) {
  throw new Error("SESSION_SECRET is not configured.");
}

const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);
}

export async function decrypt(
  token: string
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });

    if (
      typeof payload.userId !== "string" ||
      !["CLIENT", "ANALYST", "ADMIN"].includes(
        payload.role as string
      )
    ) {
      return null;
    }

    return {
      userId: payload.userId,
      role: payload.role as UserRole,
    };
  } catch {
    return null;
  }
}
