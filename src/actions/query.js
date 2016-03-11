export function updateQuery(query) {
  return {
    type: 'QUERY_UPDATED',
    payload: query,
  }
}
