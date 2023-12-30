"use client";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContentContainer, style } from "@/styles/modal.style";

type ModalComponentPropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const ModalComponent: React.FC<ModalComponentPropsType> = ({
  open,
  setOpen,
  children,
}) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ModalContentContainer>
          <div className="close-icon">
            <CloseIcon fontSize="large" onClick={handleClose} />
          </div>
          {children}
        </ModalContentContainer>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
