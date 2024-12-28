import Sidebar from "@/components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  // const loggedIn = { firstName: 'Deeksha', lastName: 'Tiwari' };
    if (!loggedIn) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter">
      {/* SIDEBAR */}
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
