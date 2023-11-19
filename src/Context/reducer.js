export const actionType = {
  SET_USER: "SET_USER",
  SET_ALL_USERS: "SET_ALL_USERS",
  SET_ALL_AUDIOBOOKS: "SET_ALL_AUDIOBOOKS",
  SET_ALL_SERIES: "SET_ALL_SEREIS",
  SET_ALL_AUTHORS: "SET_ALL_AUTHORS",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FILTER_TERM: "SET_FILTER_TERM",
  SET_AUTHOR_FILTER: "SET_AUTHOR_FILTER",
  SET_LANGUAGE_FILTER: "SET_LANGUAGE_FILTER",
  SET_SERIES_FILTER: "SET_SERIES_FILTER",
  SET_AUDIOBOOK: "SET_AUDIOBOOK",
  SET_AUDIOBOOK_PLAYING: "SET_AUDIOBOOK_PLAYING",
  SET_MINI_PLAYER: "SET_MINI_PLAYER",
  REMOVE_FROM_PLAYLIST: 'REMOVE_FROM_PLAYLIST',
  ADD_TO_PLAYLIST: "ADD_TO_PLAYLIST",
  PAUSE_AUDIOBOOK:"PAUSE_AUDIOBOOK",
  isAudiobookPlaying: false,
  currentBook: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

      case actionType.PAUSE_AUDIOBOOK:
        return {
          ...state,
          isAudiobookPlaying: action.isAudiobookPlaying,
          pausedBook: state.currentlyPlayingBook,
          currentlyPlayingBook: null,
        };

    case actionType.SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.allUsers,
      };

    case actionType.SET_ALL_AUDIOBOOKS:
      return {
        ...state,
        allAudiobooks: action.allAudiobooks,
      };

    case actionType.SET_ALL_SERIES:
      return {
        ...state,
        allSeries: action.allSeries,
      };

    case actionType.SET_ALL_AUTHORS:
      return {
        ...state,
        allAuthors: action.allAuthors,
      };

    case actionType.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    case actionType.SET_FILTER_TERM:
      return {
        ...state,
        filterTerm: action.filterTerm,
      };

    case actionType.SET_AUTHOR_FILTER:
      return {
        ...state,
        authorFilter: action.authorFilter,
      };

    case actionType.SET_LANGUAGE_FILTER:
      return {
        ...state,
        languageFilter: action.languageFilter,
      };

    case actionType.SET_SERIES_FILTER:
      return {
        ...state,
        seriesFilter: action.seriesFilter,
      };

    case actionType.SET_AUDIOBOOK:
      return {
        ...state,
        audiobook: action.audiobook,
      };

    case actionType.SET_AUDIOBOOK_PLAYING:
      return {
        ...state,
        isAudiobookPlaying: action.isAudiobookPlaying,
        currentlyPlayingBook: action.book,
      };
    case actionType.REMOVE_FROM_PLAYLIST:
        console.log('Removing from playlist:', action.book.id);
      return {
        ...state,
        playlist: state.playlist.filter(item => item._id !== action.book._id),
      };

    case actionType.SET_MINI_PLAYER:
      return {
        ...state,
        miniPlayer: action.miniPlayer,
      };
    case actionType.ADD_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, action.book],
      };

    case "SET_AUDIOBOOK_PLAYING":
      return {
        ...state,
        isAudiobookPlaying: action.isAudiobookPlaying,
        currentBook: action.bookData,
      };
    case "NEXT_AUDIOBOOK":
      // Implement logic to get the next book based on your data structure
      // For example, you might have an array of books and an index to keep track
      // of the current book, and increment the index to get the next one.
      const nextIndex = (state.currentBookIndex || 0) + 1;
      const nextBook = state.allBooks[nextIndex];

      return {
        ...state,
        currentBook: nextBook,
        currentBookIndex: nextIndex,
      };
    default:
      return state;
  }
};

export default reducer;
