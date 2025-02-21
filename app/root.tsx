import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <LiveReload />
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Outlet />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
