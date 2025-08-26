import { useState, useMemo, useEffect } from "react";

export const usePagination = <T>(initialItems: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const totalItems = initialItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
    setItemsToShow(itemsPerPage);
  }, [initialItems, itemsPerPage]);

  const visibleItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const itemsOnPage = initialItems.slice(startIndex, startIndex + itemsToShow);
    return itemsOnPage;
  }, [totalPages, initialItems, currentPage, itemsPerPage, itemsToShow]);

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setItemsToShow(itemsPerPage);
    }
    window.scrollTo(0, 0);
  };

  const onLoadMore = () => {
    setItemsToShow((prev) => prev + itemsPerPage);
  };

  const isLastPage = currentPage === totalPages;
  const hasMoreOnCurrentPage = itemsToShow < initialItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).length;
  const hasMoreItemsToShow = initialItems.length > itemsToShow;

  return { visibleItems, totalPages, currentPage, goToPage, onLoadMore, hasMoreOnCurrentPage, isLastPage, hasMoreItemsToShow };
};
