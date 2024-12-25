"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Custom ThemeProvider to avoid hydration mismatch
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // Ensure the theme is applied after the initial client-side render
  // to avoid hydration mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the ThemeProvider after the client-side mount
  if (!mounted) return <>{children}</>;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}