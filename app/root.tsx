import { LoaderFunction } from "@remix-run/node";
import {
  json,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const loader: LoaderFunction = () => {
  return { version: process.env.VERSION };
}

export default function App() {
  const { version } = useLoaderData<{ version: string }>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="container-xl min-vh-100 vstack gap-3 py-3 bg-body-tertiary">
        <header>
          <nav className="navbar navbar-expand-md bg-body border rounded shadow-sm">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand ms-sm-3 mb-0 h1">
                <i className="bi bi-gift"></i>
                &nbsp;
                Gifts
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow-1">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12">
                <Outlet />
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center text-muted">
          Gifts Remix {version}
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
