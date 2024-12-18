import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login')
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
