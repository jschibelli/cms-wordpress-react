import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BlogPagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => handlePageChange(page)}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
};

export default BlogPagination;
