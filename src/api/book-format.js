/** Change book format from Google book api */
function formatBookData(bookItem) {
  const { id, volumeInfo } = bookItem;
  const { title, subtitle, authors, description, imageLinks, categories, publishedDate } =
    volumeInfo;

  const year = publishedDate ? publishedDate.split('-')[0] : '';
  const img = imageLinks ? imageLinks.thumbnail : '';
  return {
    id,
    title,
    subtitle,
    authors,
    year,
    description,
    img,
    categories,
  };
}

/** Get format data for SearchView */
function formatSearchData(bookList) {
  return {
    total: bookList.totalItems,
    items: bookList.items.map(formatBookData),
  };
}

export { formatBookData, formatSearchData };
