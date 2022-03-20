const categorizedProducts = (product, food, leash, toys, clothes, small, medium, large, arrival, choice, bestseller) => {
    const list = [];
    if(food === false && leash === false && toys === false && clothes === false && small === false && medium === false && large === false && arrival === false && choice === false && bestseller === false)
        return product;
    if(food) {
        let newProductsList = product.filter((prod) => "food" === prod.categoryName.toLowerCase());

        list.push(...newProductsList);
    } if(leash) {
        let newProductsList = product.filter((prod) => "leash" === prod.categoryName.toLowerCase());

        list.push(...newProductsList);

    } if(toys) {
        let newProductsList = product.filter((prod) => "toys" === prod.categoryName.toLowerCase());

        list.push(...newProductsList);

    } if(clothes) {
        let newProductsList = product.filter((prod) => "clothes" === prod.categoryName.toLowerCase());

        list.push(...newProductsList);

    } if(small) {
        let newProductsList = product.filter((prod) => "small" === prod.size.toLowerCase());

        list.push(...newProductsList);

    } if(medium) {
        let newProductsList = product.filter((prod) => "medium" === prod.size.toLowerCase());

        list.push(...newProductsList);

    } if(large) {
        let newProductsList = product.filter((prod) => "large" === prod.size.toLowerCase());

        list.push(...newProductsList);
    } if(arrival) {
        let newProductsList = product.filter((prod) => "new" === prod.tag.toLowerCase());
        list.push(...newProductsList);
    } if(choice) {
        let newProductsList = product.filter((prod) => "choice" === prod.tag.toLowerCase());

        list.push(...newProductsList);
    } if(bestseller) {
        let newProductsList = product.filter((prod) => "bestseller" === prod.tag.toLowerCase());

        list.push(...newProductsList);
    }
    return list;
}

export {categorizedProducts};