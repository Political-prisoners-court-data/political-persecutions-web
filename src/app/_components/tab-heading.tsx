"use client"
import { usePathname } from "next/navigation";

export default function TabHeading() {
  const pathName = usePathname();

  let headingCaption: string;
  switch (pathName) {
    case "/":
      headingCaption = "Главная";
      break;
    case "/rfm-updates":
      headingCaption = "Обновления РФМ";
      break;
    case "/all-updates":
      headingCaption = "Все обновления";
      break;
    case "/rfm-suggestions":
      headingCaption = "Предположения РФМ";
      break;
    case "/court-updates":
      headingCaption = "Обновления суды";
      break;
    default:
      headingCaption = "";
  }

  return <h1 className="flex text-2xl font-bold">{headingCaption}</h1>;
}
