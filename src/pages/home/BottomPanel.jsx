const BottomPanel = () => {
    return (
        <div className="grid grid-4-col pet-cards pet-cards-btm py-1 px-2">
                <div className="p-card center p-sm">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/bb1_rknzaq.png" alt="product-image" className="img-responsive bb-img" />
                    <h6>
                        Free Shipping
                        on shopping of ₹499 & above</h6>
                </div>
                <div className="p-card center p-sm">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/bb2_qch5tj.png" alt="product-image" className="img-responsive bb-img" />
                    <h6>
                        Easy Returns
                        within 7 days*</h6>
                </div>
                <div className="p-card center p-sm">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/bb3_hjzb9z.png" className="img-responsive bb-img" />
                    <h6>
                        100% Genuine Products
                        No fakes or duplicates</h6>
                </div>
                <div className="p-card center p-sm">
                    <img src="https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/bb4_vt5wg9.png" alt="product-image" className="img-responsive bb-img" />
                    <h6>Best in-class Experts
                        Trained and verified professionals</h6>
                </div>
            </div>
    )
}

export {BottomPanel};