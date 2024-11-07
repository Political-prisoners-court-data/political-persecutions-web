import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { cookies } from "next/headers";
import { AppSidebar } from "~/app/_components/app-sidebar";
import { Separator } from "~/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { TRPCReactProvider } from "~/trpc/react";
import TabHeading from "./_components/tab-heading";

export const metadata: Metadata = {
  title: "Political Persecutions of Russia",
  description:
    "Web application for monitoring of political persecutions of Russia",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
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
              <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="h-4"/>
                  <TabHeading />
                </div>
              </header>
              {children}
            </main>
          </SidebarProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
