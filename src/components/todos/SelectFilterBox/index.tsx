import React from "react";
import { Radio } from '@material-ui/core';

interface Props {
  isFilter: boolean;
  onChange: () => void;
}

const SelectFilterBox: React.FC<Props> = ({ isFilter, onChange }) => {
  return (
    <>
      <Radio
        checked={!isFilter}
        onChange={onChange}
      />
      All
      <br />
      <Radio
        checked={isFilter}
        onChange={onChange}
      />
      Not Completed
    </>
  );
};

export default SelectFilterBox;
