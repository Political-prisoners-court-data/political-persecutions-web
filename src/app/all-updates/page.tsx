

import { HydrateClient } from "~/trpc/server";

export default function AllUpdates() {

  return (
    <HydrateClient>
      <div  className="flex p-4">
        <span>Some all updates page content...</span>
      </div>
    </HydrateClient>
  );
}
