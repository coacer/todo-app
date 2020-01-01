import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from '@material-ui/core';

import { RootState } from "interfaces";

const Main: React.FC = ({ children }) => {
  const loadSelector = (state: RootState) => state.load;
  const isLoading = useSelector(loadSelector);

  return (
    <>
      {isLoading ? <CircularProgress /> : children}
    </>
  );
};

export default Main;
