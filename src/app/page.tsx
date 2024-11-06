
import { HydrateClient } from "~/trpc/server";

export default function Home() {

  return (
    <HydrateClient>
      <div  className="flex p-4">
        <span>Some main page content...</span>
      </div>
    </HydrateClient>
  );
}
