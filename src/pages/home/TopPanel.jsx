const TopPanel = () => {
return (
    <div className="grid-6-col-auto pet-cards py-1 px-2 hori-scroll">
        <div className="p-card center">
            <a href="#" className="p-img center">
                <img src="https://www.zigly.com/media/wysiwyg/for_dogs.png" alt="product-image"
                    className="min-img-small img-responsive" />
            </a>
            <a href="#" className="p-sm text-uppercase">
                <h6>shop for dogs</h6>
            </a>
        </div>
        <div className="p-card center">
            <a href="#" className="p-img center">
                <img src="https://www.zigly.com/media/wysiwyg/for_cats.png" alt="product-image"
                    className="min-img-small img-responsive" />
            </a>
            <a href="#" className="p-sm text-uppercase">
                <h6>shop for cats</h6>
            </a>
        </div>
        <div className="p-card center">
            <a href="#" className="p-img center">
                <img src="https://www.zigly.com/media/wysiwyg/puppy-store.png" className="min-img-small img-responsive" />
            </a>
            <a href="#" className="p-sm text-uppercase">
                <h6>explore puppy store</h6>
            </a>
        </div>
        <div className="p-card center">
            <a href="#" className="p-img center">
                <img src="https://www.zigly.com/media/wysiwyg/vet-consulting.png" alt="product-image"
                    className="min-img-small img-responsive" />
            </a>
            <a href="#" className="p-sm text-uppercase">
                <h6>consult a vet</h6>
            </a>
        </div>
        <div className="p-card center">
            <a href="#" className="p-img center">
                <img src="https://www.zigly.com/media/wysiwyg/pet-grooming.png" alt="product-image"
                    className="min-img-small img-responsive" />
            </a>
            <a href="#" className="p-sm text-uppercase">
                <h6>grooming</h6>
            </a>
        </div>
        <div className="p-card center">
            <a href="#" className="p-img center">
                <img src="https://www.zigly.com/media/wysiwyg/exp-center.png" alt="product-image"
                    className="min-img-small img-responsive" style={{width: '80%'}}/>
            </a>
            <a href="#" className="p-sm text-uppercase">
                <h6>Offers</h6>
            </a>
        </div>
    </div>
)
}

export {TopPanel};