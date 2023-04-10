// const initState = [
//     { id: 1, name: 'Learn HTML', completed: false, priority: 'Medium' },
//     { id: 1, name: 'Learn CSS', completed: true, priority: 'High' },
//     { id: 1, name: 'Learn JS', completed: false, priority: 'Low' },
// ];
// const todoListReducer = (state = initState, action) => {
//     // console.log({ state, action });
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [
//                 ...state,
//                 action.payload
//             ]
//         default:
//             return state;
//     }
// }

// export default todoListReducer;

import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn HTML', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn CSS', completed: true, priority: 'High' },
        { id: 3, name: 'Learn JS', completed: false, priority: 'Low' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }
    }
});

export default todoListSlice;