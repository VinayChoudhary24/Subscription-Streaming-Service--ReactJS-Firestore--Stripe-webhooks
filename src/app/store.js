import { configureStore } from '@reduxjs/toolkit';

// Change this IMPORT PATH
// import counterReducer from '../features/counter/counterSlice';
import counterReducer from '../features/counterSlice';

// Change this
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });