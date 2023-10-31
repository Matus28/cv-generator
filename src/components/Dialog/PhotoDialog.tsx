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
import UserProfile from "../../assets/user-profile-icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { PhotoButton } from "./PhotoButton";
import { TransitionProps } from "@mui/material/transitions";
import styles from "./PhotoDialog.module.scss";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";

interface PhotoDialogProps {
  label: string;
  value: string;
  onChange: (photo: string) => void;
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
  const [preview, setPreview] = React.useState<string>(UserProfile);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setPreview(UserProfile);
    setOpen(false);
  };

  const handleDragAndDrop = (photo: string): void => {
    props.onChange(photo);
  };

  const handleExternImage = (): void => {};

  return (
    <div className={styles.wrapper}>
      <PhotoButton value={props.value} onOpen={handleClickOpen} />
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
        <DialogContent className={styles.content}>
          <DragAndDrop
            preview={preview}
            value={props.value}
            onSetPreview={setPreview}
            onChange={handleDragAndDrop}
            onSetOpen={setOpen}
          />
          <h4>OR</h4>
          <TextField
            className={styles.url}
            id="standard-basic"
            name="photo-url"
            type="text"
            onChange={handleExternImage}
          ></TextField>
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
