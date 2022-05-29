
let adviceTitle = document.querySelector('#adviceId');
let adviceText = document.querySelector('#adviceText');

const fetchAdvice = () => {
    const apiUrl = 'https://api.adviceslip.com/advice';

    fetch(apiUrl)
        .then((response) => {
            /* console.log(response); */
            if (response.status != 200) {
                Error
            } else {
                return response.json();
            }
        })
        .then((advice) => {
            /* console.log(advice); */
            const elementId = advice.slip.id;
            const elementText = advice.slip.advice;
            adviceTitle.innerHTML = elementId;
            adviceText.innerHTML = elementText;
        });
};

fetchAdvice();
