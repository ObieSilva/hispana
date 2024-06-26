// Components import
import { Button } from "@mui/material";

const HispanaButton = ({ title, variant, backgroundColor, onClick, url, sx }) => {
  return (
    <Button
      variant={variant}
      size="medium"
      disableElevation
      onClick={onClick}
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
      sx={{
        backgroundColor: backgroundColor,
        padding: "8px 32px",
        ...sx,
      }}
    >
      {title}
    </Button>
  );
};

export default HispanaButton;