export function reducer(state, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return {...state, logged: true, loading: false};
    case 'LOGGED_OUT':
      return {...state, logged: false, loading: false};
    case 'LOADING_LOG':
      return {...state, loading: true};
    case 'SEARCHBAR_ENABLED':
      return {...state, searchbarEnabled: true};
    case 'SEARCHBAR_DISABLED':
      return {
        ...state,
        searchbarEnabled: false,
        searchLoading: false,
        searchString: '',
      };
    case 'SEARCH_LOADING':
      return {...state, searchLoading: true};
    case 'SEARCH_LOADED':
      return {...state, searchLoading: false};
    case 'SEARCH_STRING':
      return {...state, searchString: action.payload};
    default:
      return {...state};
  }
}
