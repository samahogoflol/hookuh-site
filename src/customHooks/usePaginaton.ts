import { useState, useMemo } from "react";

const usePagination = <T>(initialItems: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const totalItems = initialItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const visibleItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const itemsOnPage = initialItems.slice(startIndex, startIndex + itemsToShow);
    return itemsOnPage;
  }, [totalPages, initialItems, currentPage, itemsPerPage]);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setItemsToShow(itemsPerPage);
    }
  };

  const onLoadMore = () => {
    setItemsToShow((prev) => prev + itemsPerPage);
  };

  const hasMore = itemsToShow < initialItems.length - (currentPage - 1) * itemsPerPage;
  const isLastPage = currentPage === totalPages;
  const hasMoreOnCurrentPage = itemsToShow < initialItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).length;
  return { visibleItems, totalPages, currentPage, goToPage, onLoadMore, hasMore, hasMoreOnCurrentPage, isLastPage };
};

export default usePagination;
