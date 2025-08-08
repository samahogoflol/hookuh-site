import { useState, useMemo, useEffect } from "react";

const usePagination = <T>(initialItems: T[], itemsPerPage: number) => {
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);

  useEffect(() => {
    setItemsToShow(itemsPerPage);
  }, [initialItems, itemsPerPage]);

  const visibleItems = useMemo(() => {
    return initialItems.slice(0, itemsToShow);
  }, [initialItems, itemsToShow]);

  const onLoadMore = () => {
    setItemsToShow((prevCount) => prevCount + itemsPerPage);
  };

  const hasMore = itemsToShow < initialItems.length;

  return { visibleItems, onLoadMore, hasMore };
};

export default usePagination;
