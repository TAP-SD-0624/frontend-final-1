import MuiButton from "@mui/material/Button";

const Button = ({ children, sx }) => {
  return <MuiButton sx={sx}>{children}</MuiButton>;
};

export default Button;
