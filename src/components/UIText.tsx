import { styled } from 'stitches-native';


export const UIHeading = styled('Text', {
    paddingBottom: 1,
    fontWeight: "bold",
    '&:hover': {
      border: "1px solid #8834F5",
      color: "#8834F5",
    },
  
    variants: {
      size: {
        '2xLarge': { fontSize: 40 },
        xLarge: { fontSize: 36 },
        large: { fontSize:32 },
        medium: { fontSize:24 },
        small: { fontSize:20 },
        xSmall: { fontSize:16 },
        "2xSmall": { fontSize:12 },
      },
      color: {
        black: {color: "#000"},
        white: {color: "#fff"},
        sucess: {color: "#93C972"},
        violet: {color: "#8834F5"},
        "gray/800": {color: "#545454"},
        "gray/900": {color: "#454545"},
        "gray/50": {color: "#EFEFEF"},
        "gray/100": {color: "#D1D1D1"},
        "gray/400": {color: "#BABFC7"},
        "gray/500": {color: "#686868"},
        "gray/700": {color: "#AAAAAA"},
      },
      position: {
        center: { alignSelf: "center"}
      }
    }
  });
  