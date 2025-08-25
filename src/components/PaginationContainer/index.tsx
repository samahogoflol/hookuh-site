interface PaginationContainerProps {
  onLoadMore: () => void;
  hasMoreOnCurrentPage: boolean;
}

const PaginationContainer: React.FC<PaginationContainerProps> = ({ onLoadMore, hasMoreOnCurrentPage }) => {
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {hasMoreOnCurrentPage ? (
        <div>
          <button onClick={onLoadMore} className="w-50 h-8 border rounded border-gray-400 hover:bg-gray-200 cursor-pointer">
            Показати ще 20 товарів
          </button>
        </div>
      ) : null}
    </>
    /* 
      <div className="flex">
        <div className="flex justify-center items-center space-x-2 mt-5">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-200"
          >
            &lt;
          </button>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-4 py-2 border rounded-md cursor-pointer ${
                page === currentPage ? "bg-black text-white" : "bg-white hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-200"
          >
            &gt;
          </button>
        </div>
      </div> */
  );
};

export default PaginationContainer;
