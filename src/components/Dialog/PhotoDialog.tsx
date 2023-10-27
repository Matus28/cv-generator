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

interface PhotoDialogProps {
  label: string;
  value: string;
  file: File | null;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onChangeFile: React.Dispatch<React.SetStateAction<File | null>> | undefined;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
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

  const handleChangeFile = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files && props.onChangeFile) {
      const file = event.target.files[0];
      props.onChangeFile(file);
    }
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const input = event.currentTarget.elements.namedItem(
      "photo"
    ) as HTMLInputElement;
    if (input.files && props.onChangeFile) {
      props.onChange(URL.createObjectURL(input?.files[0]));
    }

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
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <form id="photo-form" onSubmit={onSubmitHandler}>
            <TextField
              className={styles.input}
              id="standard-basic"
              name="photo"
              type="file"
              onChange={handleChangeFile}
              inputProps={{
                accept: "image/*",
              }}
            />
          </form>
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
