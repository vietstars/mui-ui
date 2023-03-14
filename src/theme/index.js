import PropTypes from "prop-types"
import { 
  useMemo 
} from "react"

import { 
  CssBaseline
 } from "@mui/material"

import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles"

import logoDark from "assets/logo-dark.svg"
import logoLight from "assets/logo-light.svg"

import { 
  useSetting 
} from "contexts"

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { themeMode } = useSetting();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          background: {
            default: themeMode === 'light' ? '#eeeeee' : '#121212'
          }
        },
        brand: { 
          logo: themeMode === 'light' ? logoLight : logoDark, 
          name: 'It4Today', 
          href: 'https://it4today.org'
        }
      }),
    [themeMode],
  );

  console.log(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}