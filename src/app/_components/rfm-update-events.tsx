"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api, RouterOutputs } from "~/trpc/react";

type Event = RouterOutputs["event"]["getAll"][number];

export default function RfmUpdateEvents() {
  const { data } = api.event.getAll.useQuery();

  return (
    <div className="xs:grid-cols-1 grid gap-4 p-4 lg:grid-cols-2">
      {data?.map((event: Event) => (
        <Card key={event.id} className="flex flex-col gap-2">
          <CardHeader className="p-2">
            <CardTitle className="text-sm">
              {event.fullName}/{getActionCaption(event)}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 gap-2 p-2">
            <div className="">
              <p className="text-sm font-medium leading-none">
                {getEventInfo(event)}
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-2">
            <div className="items ml-auto flex">
              <p className="text-sm text-muted-foreground">
                {event.date.toLocaleDateString("ru-RU")}
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

function getActionCaption(event: Event): string {
  switch (event.action) {
    case "added":
      return "Добавление в список РФМ";
    case "removed":
      return "Удаление из списка РФМ";
    case "changed":
      return "Изменение в списке РФМ";
    default:
      return "Неизвестное действие";
  }
}

function getEventInfo(event: Event): string {
  let info = "";
  info = info
    .concat(event.fullName)
    .concat("; ")
    .concat(event.isTerr ? "Терроризм" : "Экстремизм")
    .concat("; ")
    .concat(
      event.birthDate ? event.birthDate.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }) : "",
    );

  if (event.address || event.newAddress) {
    info = info.concat("; ").concat(event.address! || event.newAddress!);
  }

  if (event.aliases.length > 0) {
    info = info
      .concat("; ")
      .concat("Псевдонимы: ")
      .concat(event.aliases.join(", "));
  }

  if (
    Array.isArray(event.aliases) &&
    !event.aliases.length &&
    Array.isArray(event.newAliases) &&
    event.newAliases.length
  ) {
    info = info
      .concat("; ")
      .concat("Псевдонимы: ")
      .concat(event.newAliases.join(", "));
  }

  if (event.action === "changed") {
    info = info.concat(" ").concat("Изменения: ");

    if (
        (event.oldIsTerr !== undefined || event.newIsTerr !== undefined) &&
        event.oldIsTerr !== event.newIsTerr
    ) {
      info = info.concat("Терроризм/Экстремизм - ");
      if (event.oldIsTerr !== undefined) {
        info = info
            .concat("Старый: ")
            .concat(event.oldIsTerr ? "Терроризм" : "Экстремизм")
            .concat("; ");
      }
      if (event.newIsTerr !== undefined) {
        info = info
            .concat("Новый: ")
            .concat(event.newIsTerr ? "Терроризм" : "Экстремизм")
            .concat("; ");
      }
    }

    if (event.oldAliases.length > 0 || event.newAliases.length > 0) {
      info = info.concat("Псевдонимы - ");
      if (event.oldAliases.length > 0 && !arraysAreEqual(event.oldAliases, event.newAliases)) {
        info = info
          .concat("Старые: ")
          .concat(event.oldAliases.join(", "))
          .concat("; ");
      }
      if (event.newAliases.length > 0 && !arraysAreEqual(event.oldAliases, event.newAliases)) {
        info = info
          .concat("Новые: ")
          .concat(event.newAliases.join(", "))
          .concat("; ");
      }
    }

    if (
        (event.oldBirthDate || event.newBirthDate) &&
        event.oldBirthDate !== event.newBirthDate
    ) {
      info = info.concat("Дата рождения - ");
      if (event.oldBirthDate) {
        info = info
            .concat("Старая: ")
            .concat(event.oldBirthDate.toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            }))
            .concat("; ");
      }
      if (event.newBirthDate) {
        info = info
            .concat("Новая: ")
            .concat(event.newBirthDate.toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            }))
            .concat("; ");
      }
    }

    if (event.oldAddress !== undefined || event.newAddress !== undefined) {
      info = info.concat("Адрес - ");
      if (event.oldAddress) {
        info = info.concat("Старый: ").concat(event.oldAddress).concat("; ");
      }
      if (event.newAddress) {
        info = info.concat("Новый: ").concat(event.newAddress).concat("; ");
      }
    }
  }
  return info;
}

function arraysAreEqual(arr1: string[], arr2: string[]): boolean {
  if (arr1 === arr2) {
    return true;
  }
  
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

