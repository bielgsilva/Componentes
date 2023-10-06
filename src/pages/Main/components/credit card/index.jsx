import React, { useState } from 'react';
import './styles.scss';

const CreditCardForm = () => {
    const [cardInfo, setCardInfo] = useState({
        fullName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCVV: '',
        isCvvFocused: false
    });

    const { fullName, cardNumber, cardMonth, cardYear, cardCVV, isCvvFocused } = cardInfo;

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        let updatedCardInfo = { ...cardInfo, [id]: value };

        if (id === 'cardCVV') {
            const formattedCardNumber = value.replace(/\D/g, '').slice(0, 3);
            updatedCardInfo = {
                ...updatedCardInfo,
                isCvvFocused: true,
                cardCVV: formattedCardNumber.replace(/(\d{4})/g, '$1 ').trim()
            };

            updatedCardInfo = { ...updatedCardInfo, isCvvFocused: true };
        }

        if (id === 'cardNumber') {
            const formattedCardNumber = value.replace(/\D/g, '').slice(0, 16);
            updatedCardInfo = {
                ...updatedCardInfo,
                cardNumber: formattedCardNumber.replace(/(\d{4})/g, '$1 ').trim()
            };
        }

        setCardInfo(updatedCardInfo);
    };

    const renderCardOptions = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => i + start).map((item) => (
            <option key={item} value={item}>
                {item}
            </option>
        ));
    };

    return (
        <div className="wrapper flex-center-column">
            <div className="cardContainer flex-center">
                <div className={`card ${isCvvFocused ? 'hide' : 'show'}`}>
                    <div className="card__front">

                        <div className="card__front-flag flex-center">
                            <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
                            <img src="https://raw.githubusercontent.com/muhammed/interactive-card/main/src/assets/images/visa.png" alt="" />
                        </div>

                        <div className="card__front-numbers falling-animation">
                            {cardNumber}
                        </div>

                        <div className="card__front-data flex-center falling-animation ">
                            <div>
                                {fullName}
                            </div>
                            <div>
                                {`${cardMonth < 10 && `${cardMonth}` ? `0${cardMonth}` : ''}`} {`${cardMonth || cardYear ? " / " : ''}`} {cardYear}
                            </div>
                        </div>

                    </div>
                </div>

                <div className={`card ${isCvvFocused ? 'show' : 'hide'}`}>
                    <div className="card__back flex-center-column">
                        <div className="card__back-banner"></div>
                        <div className="card__back-cvv .falling-animation ">{cardCVV}</div>
                        <div className="card__back-flag flex-center">
                            <img src="https://raw.githubusercontent.com/muhammed/interactive-card/main/src/assets/images/visa.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardInput flex-center-column">
                <label htmlFor="cardNumber ">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    autoComplete="off"
                    onChange={handleInputChange}
                />

                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={handleInputChange}
                />

                <div className="cardInput__div">

                    <div className="cardInput__div-date">
                        <label htmlFor="cardDate">Card Expiry Date</label>
                        <div className="cardInput__div-date-selects flex-center">
                            <select id="cardMonth" value={cardMonth} onChange={handleInputChange}>
                                <option value="">Month</option>
                                {renderCardOptions(1, 12)}
                            </select>

                            <select id="cardYear" value={cardYear} onChange={handleInputChange}>
                                <option value="">Year</option>
                                {renderCardOptions(new Date().getFullYear(), new Date().getFullYear() + 10)}
                            </select>

                        </div>

                    </div>

                    <div className="cardInput__div-cvv">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cardCVV"
                            value={cardCVV}
                            onChange={handleInputChange}
                            onFocus={() => setCardInfo({ ...cardInfo, isCvvFocused: true })}
                            onBlur={() => setCardInfo({ ...cardInfo, isCvvFocused: false })}
                        />

                    </div>

                </div>

                <button>Pagar agora</button>
            </div>

        </div>
    );
};

export default CreditCardForm;
