export function paginate(items, pageSize, pageSelected) {
  if (!items) return [];
  let pageStart = pageSelected * pageSize;
  let pageEnd = pageStart + pageSize;
  return items.slice(pageStart, pageEnd);
}
