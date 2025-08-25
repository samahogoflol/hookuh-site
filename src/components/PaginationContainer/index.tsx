import { useParams } from "react-router-dom";
import usePagination from "../../customHooks/usePaginaton";
import { allCategoriesData } from "../../data/allCategoriesData";

const PaginationContainer = () => {
  // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  // console.log(totalPages);

  const { slugs } = useParams();
  const findRightWay = slugs?.split("/")[0];
  const currentCategory = allCategoriesData.find((category) => category.slug === findRightWay);
  const test = currentCategory?.products ? currentCategory.products : [];

  return (
    <>
      <div>
        <button className="w-50 h-8 border rounded border-gray-400 hover:bg-gray-200 cursor-pointer">Показати ще 20 товарів</button>
      </div>

      {/* 
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
      </div> */}
    </>
  );
};

export default PaginationContainer;
