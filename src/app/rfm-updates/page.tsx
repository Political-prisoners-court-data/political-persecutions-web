
import { HydrateClient } from "~/trpc/server";

export default function RfmUpdates() {

  return (
    <HydrateClient>
      <div  className="flex p-4">
        <span>Some rfm updates page content...</span>
      </div>
    </HydrateClient>
  );
}
