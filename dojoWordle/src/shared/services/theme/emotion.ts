/* eslint-disable @typescript-eslint/no-empty-interface */

import { theme } from './theme';

type ThemeInterface = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeInterface {}
}