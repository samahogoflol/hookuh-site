import { useState, useMemo, useEffect } from "react";

export const usePagination = <T>(initialItems: T[], itemsPerPage: number) => {
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);

  useEffect(() => {
    setItemsToShow(itemsPerPage);
  }, [initialItems, itemsPerPage]);

  const visibleItems = useMemo(() => {
    const itemsOnPage = initialItems.slice(0, itemsToShow);
    return itemsOnPage;
  }, [initialItems, itemsPerPage, itemsToShow]);

  const onLoadMore = () => {
    setItemsToShow((prev) => prev + itemsPerPage);
  };

  const hasMoreItemsToShow = initialItems.length > itemsToShow;

  return { visibleItems, onLoadMore, hasMoreItemsToShow };
};
