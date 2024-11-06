import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { TRPCReactProvider } from "~/trpc/react";
import { AppSidebar } from "~/app/_components/app-sidebar";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Political Persecutions of Russia",
  description:
    "Web application for monitoring of political persecutions of Russia",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

export default RootLayout;