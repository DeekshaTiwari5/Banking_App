import Sidebar from "@/components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Deeksha', lastName: 'Tiwari' };
  return (
    <main>
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
