import { configureStore } from "@reduxjs/toolkit";
import transactionSliceReducer from "../features/transactions/transactionsSlice";

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
    reducer: {
        transaction: transactionSliceReducer,
    }

});


export default store;
