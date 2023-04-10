// Redux Core
// import {createStore} from 'redux';
// import rootReducer from './reducer';
// // Config use devtool
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);

// export default store;todoListReducer

// Redux Toolkit

import {configureStore} from '@reduxjs/toolkit';
import filtersSlice from '../component/Filters/FiltersSlice';
import todoListSlice from '../component/TodoList/TodoListSlice';
// Khong can compireducer
const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer,
    }
});
export default store;