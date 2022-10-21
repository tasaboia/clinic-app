import { styled } from 'stitches-native';

export const UIButton = styled('Button', {
  backgroundColor: '#8834F5',
  borderRadius: '10px',
  fontSize: '16px',
  width: "100%",
  height: "40px",
  marginTop: "1rem",
  color: "white",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  '&:hover': {
    backgroundColor: '#923EFF',
    
  },
  '&:focus': {
    backgroundColor: '#741AE8',
  },

  variants: {
    variant:{
        error: {
            border: '1px solid red',
        },
    }
  }
});