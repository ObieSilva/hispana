import { Button } from "@mui/material";

const HispanaButton = ({ title, variant, bgColor, onClick, url }) => {
  return (
    <Button
      className={`bg-${bgColor}`}
      variant={variant}
      size="medium"
      disableElevation
      onClick={onClick}
      href={url}
      target={url ? "_blank" : undefined}
      rel={url ? "noopener noreferrer" : undefined}
    >
      {title}
    </Button>
  );
};

export default HispanaButton;