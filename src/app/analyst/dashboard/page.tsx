
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/app/client/dashboard/logout-button";

export default async function Page() {
  // Get the session cookie
  const cookieStore = await cookies();
  const token = cookieStore.get("cybershield_session")?.value;

  // Check whether the user is logged in
  if (!token) {
    redirect("/login");
  }

  // Verify the session
  const session = await decrypt(token);

  if (!session || !session.userId || session.role !== "ANALYST") {
    redirect("/login");
  }

  // Get the Analyst account from the database
  const user = await prisma.user.findUnique({
    where: {
      id: session.userId,
    },
  });

  // Verify the database role
  if (!user || user.role !== "ANALYST") {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Welcome to CyberShield!
        </h1>

        <h2 className="mb-6 text-xl font-semibold text-blue-700">
          Security Analyst Dashboard
        </h2>

        <div className="space-y-3 rounded-xl bg-slate-50 p-5">
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        <p className="mt-5 font-medium text-green-700">
          You are successfully authenticated as a Security Analyst.
        </p>

        <LogoutButton />

      </div>
    </main>
  );
}
