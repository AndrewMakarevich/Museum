import { useContext } from 'react';
import { Context } from '../..';
import './buyTickets-section.css';
import { openTicketModal } from './ticketsModalWindow/modalScript';


const BuyTickets = ({ basicValue, totalPrice, setChangePrice, exhibitionType, setExhibitionType, setExhibitionCoefficient }) => {
    const url = `https://fountravel.ru/wp-content/uploads/2018/03/Brak-v-Kane-Veroneze.jpg`;

    const { ticketType } = useContext(Context);


    return (
        <div className="buyTickets-container">
            <a name="Tickets"></a>
            <h2 className="buyTickets-header">buy tickets</h2>
            <section className="buyTickets-mainBlock">
                <img className="buyTickets-mainBlock__img" src={url} alt="" />
                <section className="buyTickets-mainBlock__buyPanel">
                    <div className="buyPanel__ticketType">
                        <h3 className="buyPanel-header">Ticket Type</h3>
                        <ul className="ticketType-list" onClick={(e) => {
                            console.log(e.target.dataset.coefficient);
                            setExhibitionType(e.target.value);
                            setExhibitionCoefficient(e.target.dataset.coefficient);
                        }
                        }>
                            {
                                ticketType.ticketTypes.map(type => {
                                    return (
                                        <li className="ticketType-item" key={type.id}>

                                            {
                                                type.value === exhibitionType ?
                                                    <input id={type.value} name="ticketType" type="radio" data-coefficient={type.coefficient} value={type.value} checked></input>
                                                    :
                                                    <input id={type.value} name="ticketType" type="radio" data-coefficient={type.coefficient} value={type.value}></input>
                                            }
                                            <label className="ticketType-item__header" for={type.value}>{type.value}</label>
                                        </li>


                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="buyPanel__amount">
                        <h3 className="buyPanel-header">Amount</h3>
                        {
                            ticketType.tickets.map((ticket, i) => {
                                return (

                                    <div key={ticket.id}>
                                        <h4 className="buyPanel__amount-header" >{ticket.type}</h4>
                                        <div className="buyPanel__amount-counterBlock">

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
                                    </div>
                                )
                            })
                        }
                        <div className="buyPanel__amount-totalPrice">{`Total € ${totalPrice}`}</div>
                        <button onClick={() => openTicketModal()} className="buyPanel__amount-buyButton">Buy Now</button>
                    </div>
                </section>
            </section>
        </div >
    )
};
export default BuyTickets;