import { Metadata } from "next";

import { ProductsHeader } from "@/features/products/components/producs-header";
import { ProductsCardDisplay } from "@/features/products/components/products-card-display";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <ProductsHeader />
      <ProductsCardDisplay />
    </div>
  );
}
