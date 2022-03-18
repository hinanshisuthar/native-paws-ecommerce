const TopCategories = () => {
    return (
        <section className="categories flex-col-sb p-1 my-2">
            <div className="cat-text my-1">
                <h1 className="text-regular">Top Categories</h1>
            </div>
            <div className="cat-cards grid grid-4-col my-1 mx-2 hori-scroll p-1">
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500588/home/toys_l4zmsj.svg" alt="food-category"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Toys</h4>
                </div>
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/food_uwkbjc.jpg" alt="toys-category"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Food</h4>
                </div>
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500589/home/leash_juk9vv.svg" alt="leash-category"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Leash</h4>
                </div>
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500590/home/cloth_ttnk0r.svg" alt="cloth-category"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Clothing</h4>
                </div>
            </div>
        </section>
    )
}

export {TopCategories};