import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState =
{

    drinks: null
};



const drinkSlice = createSlice({
    name: 'drinks',
    initialState: initialState,
    reducers: {
        setDrinks(state, action) {
            return {
                ...state,
                drinks: action.payload



            }



        },
        setDrinksObje(state) {
            state.drinks = null
        }
    }
});

const cartInitialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addToCart(state, action) {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]

            }
        },
        updateQty(state, action) {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id === action.payload),



            }
        },
        deleteItem(state, action) {
            return {
                ...state,
                cartItems: state.cartItems?.filter((item) => item.id !== action.payload)
            }
        }
    }
});


const tealInitialState = {
    teas: null
}

const teaSlice = createSlice({
    name: 'tea',
    initialState: tealInitialState,
    reducers: {
        setTeas(state, action) {
            return {
                ...state,
                teas: action.payload
            }
        }

    }
})



const store = configureStore({
    reducer: {
        drinks: drinkSlice.reducer,
        cartItems: cartSlice.reducer,
        teas: teaSlice.reducer
    }
})



export const dinksActions = drinkSlice.actions;
export const cartAction = cartSlice.actions;
export const teaActions = teaSlice.actions;

export default store;