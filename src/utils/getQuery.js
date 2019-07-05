function getQuery(search, name) {
  if (!search || !name) {
    return undefined;
  }
  const query = search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === name) {
      return decodeURIComponent(pair[1]);
    }
  }
}

export default getQuery;
