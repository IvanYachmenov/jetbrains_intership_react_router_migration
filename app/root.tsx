import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";

import type { Route } from "./+types/root";
import { Header, Footer } from "./components";

import appCssUrl from "./app.css?url";
import globalsCssUrl from "./styles/globals.scss?url";
import sectionCssUrl from "./components/primitives/section.scss?url";
import headerCssUrl from "@jetbrains/kotlin-web-site-ui/dist/header.css?url";
import headerOverridesCssUrl from "./styles/header-overrides.scss?url";
import footerCssUrl from "@jetbrains/kotlin-web-site-ui/dist/footer.css?url";
import jbSansFontCssUrl from "@rescui/typography/lib/font-jb-sans-auto.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: jbSansFontCssUrl },
  { rel: "stylesheet", href: headerCssUrl },
  { rel: "stylesheet", href: headerOverridesCssUrl },
  { rel: "stylesheet", href: footerCssUrl },
  { rel: "stylesheet", href: appCssUrl },
  { rel: "stylesheet", href: globalsCssUrl },
  { rel: "stylesheet", href: sectionCssUrl },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "preconnect", href: "https://resources.jetbrains.com" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const error = useRouteError();
  const is404 =
    error != null &&
    isRouteErrorResponse(error) &&
    error.status === 404;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="global-layout root-layout">
          {!is404 && <Header />}
          <div className="g-layout global-content">
            {children}
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__title">{message}</h1>
        <p className="error-page__details">{details}</p>
        {stack && (
          <pre className="error-page__stack">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
