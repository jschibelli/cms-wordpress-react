import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./pagination.module.scss"


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
      <div className="pagination">
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        hideNextButton={false}
        hidePrevButton={false}
        color="primary"
        shape="circular"
        />
      </div>
    </Stack>
  );
};

export default PaginationComponent;
