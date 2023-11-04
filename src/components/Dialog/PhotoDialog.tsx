import * as React from "react";
import {
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
import { StyledButton } from "../Button/StyledButton";

interface PhotoDialogProps {
  label: string;
  value: string;
  onChange: (photo: string) => void;
  isEditMode: boolean;
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
  const [externURL, setExternURL] = React.useState<string>("");

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

  const handleChangeURL = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setExternURL(event.currentTarget.value);
  };

  const handleExternImage = (): void => {
    setPreview(externURL);
  };

  const handleSave = (): void => {
    props.onChange(preview);
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <PhotoButton
        value={props.value}
        onOpen={handleClickOpen}
        isEditMode={props.isEditMode}
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
        <DialogContent className={styles.content}>
          <DragAndDrop
            preview={preview}
            value={props.value}
            onSetPreview={setPreview}
            onChange={handleDragAndDrop}
            onSetOpen={setOpen}
          />
          <h4>OR</h4>
          <div className={styles.extern}>
            <label>Extern URL</label>
            <div className={styles.link}>
              <TextField
                id="extern-url"
                className={styles.textfield}
                name="externURL"
                type="text"
                value={externURL}
                onChange={handleChangeURL}
              />
              <StyledButton size="small" onClick={handleExternImage}>
                Load
              </StyledButton>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={handleSave}>Save</StyledButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
