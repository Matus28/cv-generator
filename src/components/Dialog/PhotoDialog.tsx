import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PhotoButton } from "./PhotoButton";
import { TransitionProps } from "@mui/material/transitions";
import styles from "./PhotoDialog.module.scss";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";

interface PhotoDialogProps {
  label: string;
  value: string;
  file: File | null;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onChangeFile: React.Dispatch<React.SetStateAction<File | null>> | undefined;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>; // eslint-disable-line
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const PhotoDialog = (props: PhotoDialogProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <PhotoButton
        value={props.value}
        file={props.file}
        onOpen={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Upload Photo"}</DialogTitle>
        <IconButton
          aria-label="close"
          className={styles.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <DragAndDrop onChangeFile={props.onChangeFile} onSetOpen={setOpen} />
        </DialogContent>
        <DialogActions>
          <Button type="submit" form="photo-form">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
