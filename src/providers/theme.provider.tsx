'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { type ThemeProviderProps } from 'next-themes/dist/types'

/**
 * @info
 * I've seen that many of you struggle with the dark/light mode and your website appears black sometimes.
 * That is why I've added this themes provider, that changes the theme.
 *
 * Usefull resources:
 * https://react.dev/reference/react/createContext
 * https://react.dev/reference/react/useContext
 */

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
