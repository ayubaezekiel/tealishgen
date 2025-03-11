import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Code2, Home } from "lucide-react";
import * as React from "react";

export const Route = createRootRoute({
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <Code2 className="h-24 w-24 text-primary mb-8" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button asChild size="lg">
        <Link to="/">
          <Home className="mr-2 h-5 w-5" />
          Return to Homepage
        </Link>
      </Button>
    </div>
  ),

  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <main className="mt-24">
        <Outlet />
      </main>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="system">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
