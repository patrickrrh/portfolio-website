'use client';

import { ThemeProvider as NextThemesProviders } from "next-themes";

export function ThemeProvider({ children, ...props }) {
    return <NextThemesProviders {...props}>{children}</NextThemesProviders>;
}