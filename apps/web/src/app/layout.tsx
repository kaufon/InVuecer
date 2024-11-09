import { Metadata } from "next";
import { ReactNode } from "react";
import { RootLayout } from "../ui/components/layouts";
import "../ui/styles/globals.css";

export const metadata:Metadata = {
  title: "Todo app",
  description: "Todo app controlle",
};

type LayoutProps = {
  children: ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return <RootLayout>{children}</RootLayout>;
}
