const initialState = {
  characters: [],
  totalPages: 1,
  totalCharacters: 0,
  searching: true,
  searchTerm: '',
  page: 1,
  error: false,
  selectedId: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return {
        ...state,
        characters: action.payload.characters,
        totalPages: action.payload.totalPages,
        totalCharacters: action.payload.totalCharacters,
        searching: false,
        error: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        totalPages: 1,
        characters: [],
        error: true,
        searching: false,
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
        page: 1,
        searching: true,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload,
      };
    case 'SET_SELECTED_ID':
      return {
        ...state,
        selectedId: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
