const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'CLEAR':
            return {
                sortBy: "",
                categories: {food: false, leash: false, toys: false, clothes: false, small: false, medium: false, large: false, arrival: false, choice: false, bestseller: false},
                price: 500,
            }
        case 'LOW_TO_HIGH':
            return {...state, sortBy: action.type}
        case 'HIGH_TO_LOW':
            return {...state, sortBy: action.type}
        case 'RATING_LOW_TO_HIGH':
            return {...state, sortBy: action.type}
        case 'RATING_HIGH_TO_LOW':
            return {...state, sortBy: action.type}
        case 'FOOD':
            return {...state, categories: {
                ...state["categories"], food: !state.categories.food
            }}
        case 'LEASH':
            return {...state, categories: {
                ...state["categories"], leash: !state.categories.leash
            }}
        case 'TOYS':
            return {...state, categories: {
                ...state["categories"], toys: !state.categories.toys
            }}
        case 'CLOTHES':
            return {...state, categories: {
                ...state["categories"], clothes: !state.categories.clothes
            }}
        case 'SMALL':
            return {...state, categories: {
                ...state["categories"], small: !state.categories.small
            }}
        case 'MEDIUM':
            return {...state, categories: {
                ...state["categories"], medium: !state.categories.medium
            }}
        case 'LARGE':
            return {...state, categories: {
                ...state["categories"], large: !state.categories.large
            }}
        case 'PRICE':
            return {...state, price: action.price}
        case 'NEW':
            return {...state, categories: {
                ...state["categories"], arrival: !state.categories.arrival
            }}
        case 'CHOICE':
            return {...state, categories: {
                ...state["categories"], choice: !state.categories.choice
            }}
        case 'BEST_SELLER':
            return {...state, categories: {
                ...state["categories"], bestseller: !state.categories.bestseller
            }}
        default:
            return state;
    }
}

export {reducerFunction};