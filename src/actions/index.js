export const setCharacters = (characters, totalPages, totalCharacters) => ({
  type: 'SET_CHARACTERS',
  payload: { characters, totalPages, totalCharacters },
});

export const setError = () => ({
  type: 'SET_ERROR',
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm,
});

export const setPage = (page) => ({
  type: 'SET_PAGE',
  payload: page,
});

export const setSelectedId = (selectedId) => ({
  type: 'SET_SELECTED_ID',
  payload: selectedId,
});

 
