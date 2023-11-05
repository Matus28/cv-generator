import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styles from "./StyledSelect.module.scss";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1907 + 1 }, (_, index) => ({
  name: (currentYear - index).toString(),
  value: currentYear - index,
}));

const months = [
  { name: "Don't show", value: -1 },
  { name: "Show year only", value: 0 },
  { name: "January", value: 1 },
  { name: "February", value: 2 },
  { name: "March", value: 3 },
  { name: "April", value: 4 },
  { name: "May", value: 5 },
  { name: "June", value: 6 },
  { name: "July", value: 7 },
  { name: "August", value: 8 },
  { name: "September", value: 9 },
  { name: "October", value: 10 },
  { name: "November", value: 11 },
  { name: "December", value: 12 },
];

type StyledSelectProps = {
  type: string;
  value: string | number;
  onChange: (newValue: number) => void;
};

export const StyledSelect = (props: StyledSelectProps): JSX.Element => {
  const data =
    props.type === "year" ? years : props.type === "month" ? months : [];

  const handleSelect = (event: SelectChangeEvent<string | number>): void => {
    const newValue = event.target.value.toString();
    props.onChange(parseInt(newValue));
  };

  return (
    <Select
      className={styles.select}
      value={props.value}
      onChange={handleSelect}
      MenuProps={{
        classes: {
          paper: styles.menuPaper,
        },
      }}
    >
      {data.map((element) => (
        <MenuItem key={element.value} value={element.value}>
          {element.name}
        </MenuItem>
      ))}
    </Select>
  );
};
