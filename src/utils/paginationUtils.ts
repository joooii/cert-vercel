export const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pageNumbers = [];
  const maxVisiblePages = 5;
  const halfVisible = Math.floor(maxVisiblePages / 2);
  let startPage = Math.max(1, currentPage - halfVisible);
  let endPage = Math.min(totalPages, currentPage + halfVisible);

  if (totalPages <= maxVisiblePages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= halfVisible) {
      endPage = maxVisiblePages;
    } else if (currentPage + halfVisible >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (startPage > 1) {
    pageNumbers.unshift("...");
    pageNumbers.unshift(1);
  }

  if (endPage < totalPages) {
    pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  return pageNumbers;
};
