const Footer = () => {
    return (
        <footer className="footer mt-2 flex-row-sb">
            <div className="flex-col-sb-start p-1">
                <h3 className="m-sm">Quick Links</h3>
                <a className="link link-footer m-sm" href="/index.html">
                    <h5>Home</h5>
                </a>
                <a className="link link-footer m-sm" href="/screens/product-page.html">
                    <h5>Shop All Products</h5>
                </a>
                <a className="link link-footer m-sm" href="/screens/wishlist-page.html">
                    <h5>My Wishlist</h5>
                </a>
                <a className="link link-footer m-sm" href="/screens/cart-page.html">
                    <h5>My Shopping Cart</h5>
                </a>
            </div>
            <div className="flex-col-sb-start p-1">
                <h5 className="p-sm text-center">Made with <i className="fa fa-heart"></i> by Hinanshi Suthar</h5>
                <h5 className="p-sm">Connect with me.</h5>

                <div className="social-links p-sm">
                    <a href="https://github.com/hinanshisuthar/native-paws-react" target="_blank"
                        rel="noopener noreferrer"><i className="fab fa-github pointer-cursor p-sm"></i></a>
                    <a href="https://twitter.com/hinanshi04" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-twitter pointer-cursor p-sm"></i></a>
                    <a href="https://www.linkedin.com/in/hinanshi-suthar-7128201b0/" target="_blank"
                        rel="noopener noreferrer"><i className="fab fa-linkedin pointer-cursor p-sm"></i></a>
                </div>
                <small className="p-sm">© Native Paws.</small>
            </div>
        </footer>
    )
}

export {Footer};