# react-router-urql-ssr

## overview

SSR functionality with Urql.

Provides SSR functionality from `Next.js`‘s `Pages Router` and `App Router`’s `Client Component`.
It also works with `React Router`.

SSR does not use the functionality of the respective frameworks and works only with standard React functionality.
Therefore, it does not require any environment.

## URL of sample program

<https://react-router-urql-ssr.vercel.app/>  
<https://github.com/SoraKumo001/react-router-urql-ssr>

## Notes.

Do not use `<Suspense>` for components using useSSR in ServerSide.
You will not be able to wait for asynchronous data.

## Installation

- codegen.ts

```ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphqlpokemon.favware.tech/v8",
  documents: "app/gql/*.graphql",
  generates: {
    "app/gql/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
  },
};

export default config;
```

```sh
# Automatically create GraphQL operations (app/gql/query.graphql)
# https://github.com/SoraKumo001/next-approuter-urql-ssr/blob/master/app/gql/graphql.ts
npm run graphql-auto-query https://graphqlpokemon.favware.tech/v8 -d 1 -o app/gql/query.graphql
# Create Hooks for Urql
npm run graphql-codegen --config codegen.ts
```

## Example

- app/UrqlProvider.tsx

Set up an Exchange for SSR.

```tsx
import { Provider, cacheExchange, createClient, fetchExchange } from "urql";
import { type FC, type ReactNode, useState } from "react";
import {
  useCreateNextSSRExchange,
  NextSSRProvider,
} from "@react-libraries/next-exchange-ssr";

const isServer = typeof window === "undefined";

export const UrqlProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const nextSSRExchange = useCreateNextSSRExchange();
  const [queryClient] = useState(() =>
    createClient({
      url: "https://graphqlpokemon.favware.tech/v8",
      suspense: isServer,
      exchanges: [cacheExchange, nextSSRExchange, fetchExchange],
    })
  );
  return (
    <Provider value={queryClient}>
      <NextSSRProvider>{children}</NextSSRProvider>
    </Provider>
  );
};
```

- app/root.tsx

```tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
// import stylesheet from "./app.css?url";
import { UrqlProvider } from "./UrqlProvider";

export const links: Route.LinksFunction = () => [
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
  // { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UrqlProvider>
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
        </body>
      </UrqlProvider>
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
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
```

- src/app/routes/$page.tsx

```tsx
import { Link, useParams } from "react-router";
import { useGetAllPokemonQuery } from "../gql/graphql";

const Page = () => {
  const params = useParams();
  const page = Number(params["page"]);
  const [result] = useGetAllPokemonQuery({
    variables: { take: 10, offset: (page - 1) * 10, takeFlavorTexts: 1 },
  });

  const data = result.data?.getAllPokemon;

  if (!data || result.fetching) return <div>loading</div>;

  return (
    <>
      <title>Pokemon List</title>
      <div style={{ display: "flex", gap: "8px", padding: "8px" }}>
        <Link
          to={page > 1 ? `/${page - 1}` : ""}
          style={{
            textDecoration: "none",
            padding: "8px",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          ⏪️
        </Link>
        <Link
          to={`/${page + 1}`}
          style={{
            textDecoration: "none",
            padding: "8px",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          ⏩️
        </Link>
      </div>
      <hr style={{ margin: "24px 0" }} />
      <div>
        {data.map(({ key }) => (
          <div key={key}>
            <Link to={`/pokemon/${key}`}>{key}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Page;
```

- src/app/routes/pokemon.$name.tsx

```tsx
import { Link, useParams } from "react-router";
import { PokemonEnum, useGetPokemonQuery } from "~/gql/graphql";

const Page = () => {
  const params = useParams();
  const name = String(params["name"]);
  const [result] = useGetPokemonQuery({
    variables: { pokemon: name as PokemonEnum },
  });

  const data = result.data?.getPokemon;

  if (!data || result.fetching) return <div>loading</div>;
  return (
    <>
      <title>{name}</title>
      <div style={{ padding: "8px" }}>
        <Link
          to="/1"
          style={{
            textDecoration: "none",
            padding: "8px 32px",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          ⏪️List
        </Link>
      </div>
      <hr style={{ margin: "24px 0" }} />
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px",
        }}
      >
        <img
          style={{ boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)" }}
          src={data.sprite}
        />
        <div>{name}</div>
      </div>
    </>
  );
};
export default Page;
```
