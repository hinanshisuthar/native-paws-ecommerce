const pricedProducts = (product, price) =>
  product.filter((prod) => prod.price <= price);

export { pricedProducts };
