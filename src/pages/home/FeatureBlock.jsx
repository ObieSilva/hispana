import { useState } from "react";
import { CiCircleChevRight } from "react-icons/ci";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const FeatureBlock = ({ linkTo, title, imageSrc, content }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="card-container flex flex-col flex-grow">
        <div className="feature-card flex flex-col flex-grow">
          <div className="card-header border border-border">
            <button
              onClick={handleClickOpen}
              className={`w-full h-full flex items-center p-5 justify-between font-bold hover:bg-primary transition-all duration-200 ease-in hover:text-[#ffffff]`}
            >
              {title} <CiCircleChevRight />
            </button>
          </div>
          <div className="card-content p-5 border border-border flex flex-col flex-grow">
            <img
              className="w-14 h-auto object-contain"
              src={imageSrc}
              alt={title}
            />
            <span className="my-5 block">{content}</span>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="dialog-title">{title}</DialogTitle>
        <DialogContent>
          <div className="flex flex-col items-center py-4">
            <img
              className="w-20 h-auto object-contain mb-4"
              src={imageSrc}
              alt={title}
            />
            <p className="text-center mb-4">{content}</p>
            <p className="text-center text-sm text-gray-600 font-semibold">
              Para informacion sobre {title} llamar al Pastor: Dr. Hector M.
              Aldaz a{" "}
              <a href="tel:7037244925" className="text-primary hover:underline">
                703-724-4925
              </a>{" "}
              oh contactarse por correo a{" "}
              <a
                href="mailto:haldaz@cfcwired.org"
                className="text-primary hover:underline"
              >
                haldaz@cfcwired.org
              </a>
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

FeatureBlock.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FeatureBlock;
