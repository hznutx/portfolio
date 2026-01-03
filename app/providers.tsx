'use client';

import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

type ProvidersProps = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};

export default function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...themeProps}
      >
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
