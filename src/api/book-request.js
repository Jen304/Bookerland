async function searchBook({ query, limit, currentIndex }) {
  const queries = new URLSearchParams({
    q: query,
    startIndex: currentIndex,
    maxResults: limit,
  });
  const url = `https://www.googleapis.com/books/v1/volumes`;
  const result = await fetch(`${url}?${queries}`);
  const json = await result.json();
  return json;
}

export { searchBook };
