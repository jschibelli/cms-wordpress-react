// Pagination.js or wherever your Pagination component is defined
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          disabled={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)} // Uses onPageChange prop to handle clicks
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
