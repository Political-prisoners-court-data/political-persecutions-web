import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarRail
} from "~/components/ui/sidebar";
import { SidebarItems } from "./sidebar-items";
import { SidebarItemsSkeleton } from "./sidebar-items-skeleton";



export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Avtozak Search</SidebarGroupLabel>
          <SidebarGroupContent>
            <React.Suspense fallback={<SidebarItemsSkeleton />}>
              <SidebarItems />
            </React.Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
