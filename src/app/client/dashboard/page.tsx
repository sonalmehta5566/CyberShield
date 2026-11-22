
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import LogoutButton from "./logout-button";

export default async function ClientDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get("cybershield_session")?.value;

  if (!token) {
    redirect("/login");
  }

  const session = await decrypt(token);

  if (!session || typeof session.userId !== "string") {
    redirect("/login");
  }

  if (session.role !== "CLIENT") {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      name: true,
      email: true,
      role: true,
    },
  });

  if (!user || user.role !== "CLIENT") {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eaf2ff] p-6">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-[#071c46]">
          Welcome to CyberShield!
        </h1>

        <p className="mt-3 text-slate-600">
          Your Client Dashboard is ready.
        </p>

        <div className="mt-8 space-y-3 rounded-lg bg-blue-50 p-5">
          <p className="text-slate-700">
            <strong>Name:</strong> {user.name}
          </p>

          <p className="text-slate-700">
            <strong>Email:</strong> {user.email}
          </p>

          <p className="text-slate-700">
            <strong>Role:</strong> {user.role}
          </p>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          You are successfully authenticated.
        </p>

        <LogoutButton />
      </div>
    </main>
  );
}
