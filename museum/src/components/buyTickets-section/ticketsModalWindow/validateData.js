import { customAlert } from "../../alertModal/alertScript";
export const validateDate = ((target, date, dateState, timeState, removeValue) => {

    let parseDate = new Date(date);
    parseDate = new Date(parseDate.getFullYear(), parseDate.getMonth(), parseDate.getDate());

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    const currentDate = new Date(currentYear, currentMonth, currentDay);

    const currentHour = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentTime = +`${currentHour}${currentMinutes}`;


    if (target.type === "date") {

        if (Date.parse(parseDate) < Date.parse(currentDate)) {
            customAlert('Incorrect visit date indicated');
            target.value = currentDate;
        } else if (Date.parse(parseDate) === Date.parse(currentDate)) {
            if (timeState) {
                const hourState = timeState.split(":")[0];
                const minuteState = timeState.split(":")[1];
                timeState = +`${hourState}${minuteState}`;
                if (timeState < currentTime) {
                    document.querySelector('.ticketInput[type="time"]').value = '';
                    return customAlert('Please, choose correct visit time');

                }
            }

        }


    } else if (target.type === "time") {

        if (!dateState) {
            target.value = '';
            return customAlert('Please, choose visit date before.');
        }

        const chosenHour = date.split(':')[0];
        const chosenMinutes = date.split(':')[1];

        dateState = new Date(dateState);
        dateState = new Date(dateState.getFullYear(), dateState.getMonth(), dateState.getDate());
        if (dateState.getTime() === currentDate.getTime()) {
            if (chosenHour < currentHour) {
                customAlert('Incorrect visit time indicated');
                target.value = ``;
            } else if (chosenHour > currentHour) {
                if (chosenHour > 19 || chosenHour < 8) {
                    customAlert('Tickets can be reserved only from 8 am to 7 pm');
                    target.value = ``;
                } else {
                    return;
                }

            } else if (+chosenHour === +currentHour) {
                if (chosenHour > 19 || chosenHour < 8) {
                    customAlert('Tickets can be reserved only from 8 am to 7 pm');
                    target.value = ``;
                }
                if (chosenMinutes < currentMinutes) {
                    customAlert('Incorrect visit time indicated');
                    target.value = ``;
                }
            }
        } else if (Date.parse(dateState) > currentDate) {
            if (chosenHour > 19 || chosenHour < 8) {
                customAlert('Tickets can be reserved only from 8 am to 7 pm');
                target.value = ``;
            } else {
                return;
            }
        }
    }

});

export const validateOther = (target) => {
    if (!target.value) {
        return;
    }
    if (target.dataset.sample === "user") {
        const regEx = new RegExp(`^[a-zA-Zа-яА-ЯёЁ]{3,15}$`).test(target.value);
        if (!regEx) {
            target.value = '';
            return customAlert('User name must include from 3 to 15 letters');
        }
    } else if (target.dataset.sample === "tel") {
        const regEx = /^\s*\+?\s?\d{1,3}(-|\s)?\(?\d{2,3}\)?((-|\s)?\d{2,3}){3,4}$/;
        if (!regEx.test(target.value)) {
            target.value = '';
            return customAlert(`<h3>Incorrect telephone number</h3> 
            <h4>You can enter a phone number using one of the presented formats:</h4> 
            <ul>
            <li>+7 (495) 123-45-67</li>
            <li>+ 7 (495) 123-45-67</li>
            <li>7(495)1234567</li>
            <li>74951234567</li>
            <li>+7 495 123 45 67</li>
            <li>+7-495-123-45-67</li>
            <li>7-495-123-45-67</li>
            </ul>`);
        }
    } else if (target.dataset.sample === 'email') {
        const regEx = /^\s*[a-zA-z-_0-9\r]{3,}@([a-z]{2,}.)?[a-z]{4,}.[a-z]{2,}/;
        if (!regEx.test(target.value)) {
            target.value = '';
            return customAlert(`<h3>Incorrect email</h3>
            <h4>You can enter an email using one of the presented formats:</h4>
            <ul>
            <li>exa_mple_18@mf.grsu.by</li>
            <li>example2001@gmail.com</li>
            <li>exa_m-ple@list.ru</li>
            </ul>`);
        }
    } else if (target.dataset.sample === "cardNumber") {
        const regEx = /^\s*(\d{4}(-|\s)?){4}\s*$/;
        if (!regEx.test(target.value)) {
            target.value = '';
            return customAlert(`<h3>Incorrect card number</h3>
            <h4>You can enter a card number using one of the presented formats:</h4>
            <ul>
            <li>4668 3485 9422 2976</li>
            <li>4668348594222976</li>
            <li>4668-3485-9422-2976</li>
            </ul>`);
        }
    } else if (target.dataset.sample === "cardholderName") {
        const regEx = /^\s*[a-zA-z]{1,}\s[a-zA-z]{1,}\s*$/;
        if (!regEx.test(target.value)) {
            target.value = '';
            return customAlert(`<h3>Incorrect cardholder name</h3>
            <h4>You can enter a cardholder name using one of the presented formats:</h4>
            <ul>
            <li>NIKOLAI VINOGRADOV</li>
            <li>nikolai vinogradov</li>
            <li>Nikolai Vinogradov</li>
            </ul>`);
        }
    } else if (target.dataset.sample === "cvc-cvv") {
        const regEx = /^\s*\d{3,4}\s*$/;
        if (!regEx.test(target.value)) {
            target.value = '';
            return customAlert(`<h3>Incorrect CVC/CVV</h3>
            <h4>You can enter CVC/CVV using one of the presented formats:</h4>
            <ul>
            <li>123</li>
            <li>1234</li>
            </ul>`);
        }
    }
};