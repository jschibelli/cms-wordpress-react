import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


interface PaginationComponentProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  count,
  onChange,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        hideNextButton={false}
        hidePrevButton={false}
        color="primary"
        shape="circular"
      />
    </Stack>
  );
};

export default PaginationComponent;
