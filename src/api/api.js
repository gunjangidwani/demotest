export function Api(http) {
  return {
    applyFilter: filters => {
      return http.get(filters);
    }
  };
}
