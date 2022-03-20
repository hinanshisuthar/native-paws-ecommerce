const sortedProducts = (product, sortBy) => {
    if(sortBy === 'LOW_TO_HIGH')
        return [...product].sort((a, b) => a.price - b.price);
    else if(sortBy === 'HIGH_TO_LOW')
        return [...product].sort((a, b) => b.price - a.price);
    else if(sortBy === 'RATING_HIGH_TO_LOW')
        return [...product].sort((a, b) => b.rating - a.rating);
    else if(sortBy === 'RATING_LOW_TO_HIGH')
        return [...product].sort((a, b) => a.rating - b.rating);
    return product;
}

export { sortedProducts };
