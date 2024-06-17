import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const colors = {
  "colors": {
    "primary": "#FF7354",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(255, 218, 214)",
    "onPrimaryContainer": "rgb(65, 0, 3)",
    "secondary": "rgb(121, 89, 0)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(255, 223, 160)",
    "onSecondaryContainer": "rgb(38, 26, 0)",
    "tertiary": "rgb(0, 99, 154)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(206, 229, 255)",
    "onTertiaryContainer": "rgb(0, 29, 50)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "#2F2E41",
    "onBackground": "#FFFFFF",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(32, 26, 25)",
    "surfaceVariant": "rgb(245, 221, 219)",
    "onSurfaceVariant": "rgb(83, 67, 66)",
    "outline": "rgb(133, 115, 113)",
    "outlineVariant": "rgb(216, 194, 191)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(54, 47, 46)",
    "inverseOnSurface": "rgb(251, 238, 236)",
    "inversePrimary": "rgb(255, 179, 172)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(252, 240, 244)",
      "level2": "rgb(250, 233, 237)",
      "level3": "rgb(247, 226, 231)",
      "level4": "rgb(247, 224, 228)",
      "level5": "rgb(245, 220, 224)"
    },
    "surfaceDisabled": "rgba(32, 26, 25, 0.12)",
    "onSurfaceDisabled": "rgba(32, 26, 25, 0.38)",
    "backdrop": "rgba(59, 45, 44, 0.4)"
  }
}

const theme = {
  ...DefaultTheme, ...colors
}

export default theme;
