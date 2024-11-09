import { api, HydrateClient } from "~/trpc/server";
import RfmUpdateEvents from "../_components/rfm-update-events";

export default async function RfmUpdates() {
  void api.event.getAll.prefetch();

  return (
    <HydrateClient>
      <RfmUpdateEvents />
    </HydrateClient>
  );
}
