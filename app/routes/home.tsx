import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Official Kotlin home" },
  ];
}

export { default } from "~/pages/home";
