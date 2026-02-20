import { type LoaderFunctionArgs } from "react-router";

export async function loader(_args: LoaderFunctionArgs) {
  throw new Response(null, { status: 404 });
}

export default function CatchAll() {
  return null;
}
