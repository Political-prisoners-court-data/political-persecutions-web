import { SidebarMenu, SidebarMenuItem, SidebarMenuSkeleton } from "../../components/ui/sidebar";

export function SidebarItemsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
