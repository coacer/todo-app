import React from "react";
import { Radio } from '@material-ui/core';

interface Props {
  isFilter: boolean;
  onChange: () => void;
}

export type SelectFilterBoxProps = Props;

const SelectFilterBox: React.FC<Props> = ({ isFilter, onChange }) => {
  return (
    <>
      <Radio
        checked={!isFilter}
        onChange={onChange}
        className="unfilter-radio"
      />
      All
      <br />
      <Radio
        checked={isFilter}
        onChange={onChange}
        className="filter-radio"
      />
      Not Completed
    </>
  );
};

export default SelectFilterBox;
