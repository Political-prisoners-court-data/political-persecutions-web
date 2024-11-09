"use client";

import { api } from "~/trpc/react";

export default function RfmUpdateEvents() {
  const { data } = api.event.getAll.useQuery();

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {data?.map((event) => (
          <div key={event.id} className="flex flex-col gap-2">
            {JSON.stringify(event)}
          </div>
        ))}
      </div>
    </div>
  );
}
