import { Ban, FileQuestion, Gavel, Home, Inbox } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Главная",
    url: "/",
    icon: Home,
  },
  {
    title: "Обновления РФМ",
    url: "/rfm-updates",
    icon: Ban,
  },
  {
    title: "Все обновления",
    url: "/all-updates",
    icon: Inbox,
  },
  {
    title: "Предположения РФМ",
    url: "/rfm-suggestions",
    icon: FileQuestion,
  },
  {
    title: "Обновления суды",
    url: "/court-updates",
    icon: Gavel,
  },
];

export function SidebarItems() {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
