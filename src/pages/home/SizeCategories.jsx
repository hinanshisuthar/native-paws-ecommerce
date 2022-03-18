const SizeCategories = () => {
    return (
        <section className="categories flex-col-sb p-1 my-2">
            <div className="cat-text my-1">
                <h1 className="text-regular text-center">Shop For Products By Breed Size</h1>
            </div>
            <div className="cat-cards grid grid-3-col my-1 mx-2 hori-scroll p-1">
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/jerry_c8nurt.png" alt="small-breed"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Small</h4>
                </div>
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/jhonu_mvg4bt.svg" alt="toys-category"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Medium</h4>
                </div>
                <div className="cat center">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500585/home/tyson_soahsl.png" alt="leash-category"
                        className="img-responsiveness img-circular min-img" />
                    <h4 className="overlay-text">Large</h4>
                </div>
            </div>
        </section>
    )
}

export {SizeCategories};