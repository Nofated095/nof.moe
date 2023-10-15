import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

function AutoTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: [
            'Fira Mono',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
      @font-face{font-family:fira mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/firamono/v14/N0bX2SlFPv1weGeLZDtgK_7SodY.woff2)format('woff2');unicode-range:U+460-52F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:fira mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/firamono/v14/N0bX2SlFPv1weGeLZDtgIv7SodY.woff2)format('woff2');unicode-range:U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116}@font-face{font-family:fira mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/firamono/v14/N0bX2SlFPv1weGeLZDtgKv7SodY.woff2)format('woff2');unicode-range:U+1F??}@font-face{font-family:fira mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJf7SodY.woff2)format('woff2');unicode-range:U+370-3FF}@font-face{font-family:fira mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/firamono/v14/N0bX2SlFPv1weGeLZDtgKP7SodY.woff2)format('woff2');unicode-range:U+100-2AF,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1E??,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:fira mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7S.woff2)format('woff2');unicode-range:U+??,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+300-301,U+303-304,U+308-309,U+323,U+329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:neonderthaw;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/neonderthaw/v3/Iure6Yx5-oWVZI0r-17AeaZBrLRw4Q.woff2)format('woff2');unicode-range:U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB}@font-face{font-family:neonderthaw;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/neonderthaw/v3/Iure6Yx5-oWVZI0r-17AeaZArLRw4Q.woff2)format('woff2');unicode-range:U+100-2AF,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1E??,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:neonderthaw;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.cn/s/neonderthaw/v3/Iure6Yx5-oWVZI0r-17AeaZOrLQ.woff2)format('woff2');unicode-range:U+??,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+300-301,U+303-304,U+308-309,U+323,U+329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
            `,
          },
        },
      }),
    [prefersDarkMode],
  );
  return theme;
};

export default AutoTheme;