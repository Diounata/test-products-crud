import { redirect } from "next/navigation";

import { configuration } from "@/lib/config/configuration";

export default function Page() {
  return redirect(configuration.paths.dashboard);
}
