const initialState = {
    user: null,
    loading: false,
    error: null,
   };

   const notesReducer = (state = initialState, action )=>{
    switch (action.type) {
        case  'FTECH_NOTES_SUCCESS':
        return {...state, notes:action.payload, loading: false}
        case 'ADD_NOTE_SUCCESS':
        return {...state, notes: [...state.notes, action.payload]}
        case 'UPDATE_NOTE_SUCCESS':
            return {
               ...state,
               notes: state.notes.map((note) => note.id === action.payload.id ? action.payload : note)
            };
            case 'DELETE_NOTE_SUCCESS':
                return {
                    ...state,
                    notes: state.notes.filter((note) => note.id !== action.payload.id)
                }
            default :
            return state;

    }
   }
   export default notesReducer;