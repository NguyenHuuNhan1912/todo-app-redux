// redux core
// const initState = {
//     search: '',
//     status: 'All',
//     priority: [],
// }
// const filtersReducer = (state = initState, action) => {
//     console.log({ state, action });
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default filtersReducer;

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload; //(immer)
        }
    }
});

export default filtersSlice;