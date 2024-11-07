
import { HydrateClient } from "~/trpc/server";

export default function CourtUpdates() {

  return (
    <HydrateClient>
      <div  className="flex p-4">
        <span>Some court updates page content...</span>
      </div>
    </HydrateClient>
  );
}
