import { ReactNode } from "react";

export default async function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 pt-4 pb-16">{children}</section>
  );
}
