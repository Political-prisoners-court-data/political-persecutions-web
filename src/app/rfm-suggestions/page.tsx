
import { HydrateClient } from "~/trpc/server";

export default function RfmSuggestions() {

  return (
    <HydrateClient>
      <div  className="flex p-4">
        <span>Some rfm suggestions page content...</span>
      </div>
    </HydrateClient>
  );
}
