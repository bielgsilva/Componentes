import React, { useState, useEffect } from 'react';
import './styles.scss';

const ProductPage = () => {
    const [selectedProduct, setselectedProduct] = useState(1);
    const [showPriceInfos, setshowPriceInfos] = useState(true);
    const [desactive, setDesactive] = useState(true);

    const handleBtnClick = (index) => {
        setselectedProduct(index);
    };

    const togglePriceInfos = () => {
        setshowPriceInfos(!showPriceInfos);
        setDesactive(!desactive)
    };


    useEffect(() => {
        const productImage = document.querySelector('.product__image');
        productImage.classList.add('shake');
        const timeout = setTimeout(() => {
            productImage.classList.remove('shake');
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, [selectedProduct]);

    return (
        <div
            className="pageProduct flex-center"
            style={{
                backgroundImage: `var(--bg-color-${selectedProduct})`,
            }}
        >

            <div className="product flex-center">

                <div className="product__image shake">
                    <img src={`https://assets.codepen.io/1462889/ch${selectedProduct}.png`} alt='' />
                </div>

                <div className="product__infos flex-center-column">
                    <div className="product__infos-titles flex-center-column">
                        <p>Free shipping</p>
                        <span>Product Page</span>
                        <h2>@bielgsilva.dev</h2>
                    </div>

                    <div className="product__infos-price flex-center-column">
                        <div className="product__infos-price-links flex-center">
                            <span className={`${desactive ? '' : 'desactive'}`} onClick={togglePriceInfos}>Description</span>
                            <span className={`${!desactive ? '' : 'desactive'}`} onClick={togglePriceInfos}>Details</span>
                        </div>
                        {showPriceInfos && (
                            <div className="product__infos-price-description flex-center">
                                The chair construction is made of ash tree. <br />Upholstery and wood color at customer's request.
                            </div>
                        )}
                        {!showPriceInfos && (
                            <div className="product__infos-price-details flex-center">
                                <div>
                                    <p><span>76</span>cm<br />Length</p>
                                </div>
                                <div>
                                    <p><span>68</span>cm<br />Width</p>
                                </div>
                                <div>
                                    <p><span>87</span>cm<br />Height</p>
                                </div>
                                <div>
                                    <p><span>10</span>kg<br />Weight</p>
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="product__infos-btn flex-center">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div
                                key={index}
                                onClick={() => handleBtnClick(index)}
                            >
                                <img src={`https://assets.codepen.io/1462889/mat${index}.jpg`} alt='' className={` ${index === selectedProduct ? 'selected' : ''}`} />
                            </div>
                        ))}
                    </div>

                    <div className="product__infos-whatsapp flex-center">
                        <a href="https://api.whatsapp.com/send?phone=PHONE_NUMBER_HERE&text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
                            <img src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone-3.png" alt="WhatsApp Icon" />
                            Fazer orçamento no WhatsApp
                        </a>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default ProductPage;
