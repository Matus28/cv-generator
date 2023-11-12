import { Autocomplete, Chip, TextField } from "@mui/material";
import styles from "./StyledAutocomplete.module.scss";

type StyledAutocomplete = {
  value: string | string[] | number;
  onChange: (newValue: string[]) => void;
};

export const StyledAutocomplete = (props: StyledAutocomplete): JSX.Element => {
  const skills = props.value as string[];

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string[]
  ): void => {
    props.onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={[]}
      value={skills}
      defaultValue={skills}
      onChange={handleChange}
      fullWidth
      freeSolo
      classes={{
        tag: styles.tag,
      }}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
};
