// console.log(workTable);
    // for (let i = 5; i < 25; i++) {
    //     console.log('hi');
    //     workTable.c.innerHTML = 
    // }

    // console.log(workTable);

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //         year = document.querySelector('#days'),
    //         month = document.querySelector('#days'),
    //         days = document.querySelector('#days'),
    //         hours = document.querySelector('#hours'),
    //         minutes = document.querySelector('#minutes'),
    //     timeInterval = setInterval(updateClock, 1000);
    // updateClock();


    // function getParseTme(endTime) {
    //     let year, month, days, hours, minutes;
    //     const t = Date.parse(endTime) - Date.parse(new Date());

    //     if (t <= 0) {
    //         days = 0; hours = 0; minutes = 0; seconds = 0;
    //     } else {
    //         year = Math.floor(t / (1000 * 60 * 60 * 24)),
    //             days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //             hours = Math.floor((t / (1000 * 60 * 60) % 24)),
    //             minutes = Math.floor((t / (1000 * 60) % 60)),
    //             seconds = Math.floor((t / (1000) % 60));

    //     }
    //     console.log(year);
    //     return {
    //         'total': t,
    //         'year': year,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }

    // function addZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`;
    //     } else return num;
    // }

    // function updateClock() {

    //     const t = getParseTme(endTime);
    //     year.innerHTML = addZero(t.year);
    //     days.innerHTML = addZero(t.days);
    //     hours.innerHTML = addZero(t.hours);
    //     minutes.innerHTML = addZero(t.minutes);
    //     seconds.innerHTML = addZero(t.seconds);
    //     if (t.total <= 0) {
    //         clearInterval(timeInterval);
    //     } else {
    //         return t.total;
    //     }

    // }



    // function classAdd(item) {
    //     item.classList.add('fade');
    // }

    // function classRemove(item) {
    //     item.classList.remove('fade');
    // }

    // }
    // setClock('.timer', deadline);

    // })

    // const parentBox = document.querySelector('.box'),
    //     childBox = document.getElementsByClassName('box__item');

    // for (let i = 1; i < 5; i++) {
    //     const childBox = document.createElement('div');
    //     childBox.classList.add('box__item', 'button');
    //     parentBox.append(childBox);
    // }

    // const updateChildboxs = Array.from(childBox);
    // console.log(updateChildboxs);
    // updateChildboxs.forEach((element, number) => {
    //     element.innerHTML = `<a target="_blank" href = 'https://www.google.com/search?client=msedge-b-d&q=Progressbar Server+${number + 1}'>Progressbar Server ${number + 1}</a>`;