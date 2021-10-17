import { useContext, useState, useEffect } from 'react';
import { Context } from '../../..';
import { CloseIcon } from '../../../icons/closeIcon';
import { closeTicketModal } from './modalScript';
import './ticketsModalWindow.css';
import { validateDate } from './validateData';
import { validateOther } from './validateData';
import { getOptionInfo } from '../getOptionInfo';
const TicketsModalWindow = ({ basicValue, totalPrice, setChangePrice, exhibitionType, setExhibitionType, setExhibitionCoefficient }) => {
    const { ticketModal } = useContext(Context);
    const { ticketType } = useContext(Context);

    const [visitDate, setVisitDate] = useState(null);
    const [visitTime, setVisitTime] = useState(null);


    const dateOptions = { weekday: 'long', month: 'long' };



    return (
        <div className="modal-background">
            <section className="modal-block">
                <button className="closeButton" onClick={() => closeTicketModal()}><CloseIcon /></button>
                <div className="modal-block__inputSection">
                    <section className="inputSection__personalData">
                        <h2 className="modal-block__header">
                            Booking tickets
                        </h2>
                        <h3 className="modal-block__underheader">Tour to the Louvre</h3>
                        {
                            ticketModal.inputs.map((input, i) => {
                                if (i === 0 || i === 1) {
                                    return (
                                        <input
                                            className={`ticketInput shortedInput ${input.inputSample}`}
                                            key={input.id}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            required
                                            min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                                            onBlur={(e) => {
                                                validateDate(e.target, e.target.value, visitDate, visitTime);
                                                if (e.target.type === 'date') {
                                                    setVisitDate(e.target.value)
                                                } else if (e.target.type === 'time') {
                                                    setVisitTime(e.target.value)
                                                }
                                            }}
                                        ></input>
                                    )
                                } else {
                                    return (
                                        <input
                                            className={`ticketInput longInput ${input.inputSample}`}
                                            key={input.id}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            required
                                            data-sample={input.inputSample}
                                            onBlur={e => validateOther(e.target)}>
                                        </input>
                                    )
                                }

                            })
                        }
                        {
                            ticketModal.selections.map(select => {
                                return (
                                    <select className={`ticketInput longInput ${select.type}`} key={select.id} placeholder={select.placeholder} onChange={(e) => {
                                        setExhibitionType(e.target.value);
                                        setExhibitionCoefficient(getOptionInfo(e.target, e.target.selectedIndex).dataset.coefficient);
                                    }
                                    }>
                                        {
                                            select.selection.map(option => {
                                                return (
                                                    (
                                                        option.value === exhibitionType ?
                                                            <option data-coefficient={option.coefficient} key={option.id} selected>{option.value}</option>
                                                            :
                                                            <option data-coefficient={option.coefficient} key={option.id}>{option.value}</option>
                                                    )

                                                )
                                            })
                                        }
                                    </select>
                                )
                            })
                        }
                        <section className="modal-block__entry-ticket">
                            <h4 className="entry-ticket__header">Entry Ticket</h4>
                            {
                                ticketType.tickets.map((ticket, i) => {
                                    return (

                                        <section className="buyPanel__amountOfTickets" key={ticket.id}>
                                            <h5 className="buyPanel__amount-header modalStyle">{basicValue[i].type}   ({basicValue[i].price} €)</h5>
                                            <div className="buyPanel__amount-counterBlock modalStyle">
                                                <button
                                                    onClick={(e) => setChangePrice(ticket.id, basicValue[i].amount - 1)}
                                                    className="counterBlock-decrement">-</button>
                                                <div
                                                    className="counterBlock-value">
                                                    {basicValue[i].amount}
                                                </div>
                                                <button
                                                    onClick={() => setChangePrice(ticket.id, basicValue[i].amount + 1)}
                                                    className="counterBlock-increment">
                                                    +
                                                </button>
                                            </div>
                                        </section>
                                    )
                                })
                            }
                        </section>
                    </section>
                    <section className="inputSection__cardData">
                        <div className="inputSection__overviewBlock">
                            <h3 className="overviewBlock__header">Overview</h3>
                            <h4 className="overviewBlock__underheader">Tour to the Louvre</h4>
                            <ul className="overviewBlock__list">
                                <li className="overviewBlock__chosenVisitDate date">
                                    {
                                        visitDate ?
                                            `${new Date(visitDate).toLocaleDateString('en-US', dateOptions)} ${new Date(visitDate).getDate()}`
                                            :
                                            'Choose visit date'
                                    }
                                </li>
                                <li className="overviewBlock__chosenTimeDate time">
                                    {visitTime ?
                                        visitTime
                                        :
                                        'Choose visit time'
                                    }
                                </li>
                                <li className="overviewBlock__chosenTimeDate check">
                                    {exhibitionType}
                                </li>
                            </ul>
                            <div className="overviewBlock__chosenTickets">
                                {
                                    ticketType.tickets.map((ticket, i) => {
                                        return (
                                            <article className="chosenTickets__ticket" key={ticket.id}>
                                                <div className="chosenTickets__info">
                                                    <div className="chosenTickets__amount">
                                                        {basicValue[i].amount}
                                                    </div>
                                                    <div className="chosenTickets__type">
                                                        {ticket.type} ({ticket.price} €)
                                                    </div>
                                                </div>
                                                <div className="chosenTickets__price"> {basicValue[i].amount * basicValue[i].price} € </div>
                                            </article>
                                        )
                                    })
                                }

                            </div>
                            <div className="overviewBlock__chosenTickets__totalPrice">
                                <h4 className="totalPrice-header">Total:</h4>
                                <div className="totalPrice-value">{totalPrice} €</div>
                            </div>
                        </div>
                        <div className="cardBlock">
                            <div className="cardBlock__front-info">
                                <article className="cardNumber-block">
                                    <label for="cardNumber">Card number</label>
                                    <input
                                        data-sample="cardNumber"
                                        id="cardNumber"
                                        className="cardNumber"
                                        type="number"
                                        onBlur={e => validateOther(e.target)}>
                                    </input>
                                </article>
                                <article className="expirationDate-block">
                                    <label for="expirationDate">Expiration date</label>
                                    <input id="expirationDate" type="month" className="expirationDate"></input>
                                </article>
                                <article className="cardholderName-block">
                                    <label for="cardholderName">Cardholder name</label>
                                    <input
                                        data-sample="cardholderName"
                                        id="cardholderName"
                                        type="text"
                                        className="cardholderName"
                                        onBlur={e => validateOther(e.target)}>
                                    </input>
                                </article>
                            </div>
                            <div className="cardBlock__back-info">
                                <label for="cvc-info" className="cvc-info__header">CVC/CVV</label>
                                <input
                                    data-sample="cvc-cvv"
                                    id="cvc-info"
                                    className="cvc-info"
                                    onBlur={e => validateOther(e.target)}>
                                </input>
                                <div className="cvc-addInfo">The last
                                    3 or 4 digits
                                    on back
                                    of the card</div>


                            </div>
                        </div>
                        <div className="book-button__block">
                            <button className="book-button">Book</button>
                        </div>

                    </section>
                </div>

            </section>
        </div>
    )
};
export default TicketsModalWindow;