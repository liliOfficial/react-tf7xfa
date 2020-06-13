import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Input = ({ keywords, onClick, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="search-input">Keywords</InputLabel>
      <OutlinedInput
        id="search-input"
        value={keywords}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search keywords"
              onClick={onClick}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  );
};

export default Input;
