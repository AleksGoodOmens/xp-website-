'use strict'
document.addEventListener('DOMContentLoaded', () => {

    // const deadline = prompt('Put deadline in format YYYY-MM-DD', '');
    // const deadline = '2022-11-13';
    //! /////////////////////////////////////////////////////////////////////////////////

    //! variables

    //! /////////////////////////////////////////////////////////////////////////////////

    const workTableIcons = ['My Computer', 'Network', 'Recycle Bin', 'Virtual Machine', 'Chrome', 'Mazila fireFox', 'Internet Explorer', 'Microsoft Acses 2010', 'Microsoft Excel 2010', 'Microsoft One Note 2010', 'Microsoft Outlook', 'Microsoft PowerPoint', 'Microsoft Word', 'Camera', 'Windows 10', 'My file', 'Virtual Studio', 'Roblox', 'Users', 'Laptop', 'Nikita', 'Discord', 'Progressbar95', 'Among Us', 'Win 98 Simulator', 'Win7 Simu', 'VEGAS Pro 16.0', 'Pinball', 'Windows 96', 'Windows 93', 'СТС', 'ОРТ'];

    let startX, startY, startWidth, startHeight;

    const startMenu = document.querySelector('.footer__menu-start'),
        startMenuButton = document.getElementById('buttonStartMenu'),
        workTable = document.querySelector('.worktable'),
        modalTriger = document.querySelectorAll('[data-open-modal]'),
        shutdown = document.querySelector('.modal'),
        modalClose = document.querySelectorAll('[data-close-modal]'),
        window = document.querySelector('.window'),
        resizerLeft = document.querySelector('.resizer-left'),
        resizerTop = document.querySelector('.resizer-top'),
        resizerBottom = document.querySelector('.resizer-bottom'),
        resizerRight = document.querySelector('.resizer-right'),
        startMenuLinks = document.querySelector('.body-start-menu');

    let SMLLTop = startMenuLinks.querySelector('.left-menu-body__header'),
        SMLRTop = startMenuLinks.querySelector('.right-menu-start__header'),
        SMLRMidle = startMenuLinks.querySelector('.right-menu-start__main'),
        SMLRBottom = startMenuLinks.querySelector('.right-menu-start__footer');

    //! //////////////////////////////////////////////////////////////////////////////////

    //! variables end

    //! //////////////////////////////////////////////////////////////////////////////////


    //! /////////////////////////////////////////////////////////////////////////////////

    //! Objects
    let objectStartMenu = {
        leftSide: {
            top: {
                'Internet': 'Internet',
                'Email': 'E-mail',
                'Julia': 'JULIJA'
            }
        },
        rightSide: {
            top: {
                'My Documents': 'myDocuments',
                'My Pictures': 'myPictures',
                'My Music': 'myMusic',
                'My Computer': 'myComputer',
            },
            middle: {
                'Control Panel': 'controlPanel',
            },
            bottom: {
                'Help and Support': 'helpAndSupport',
                'Search': 'search',
                'Run...': 'run'
            }
        }
    };

    const _OSMLTop = objectStartMenu.leftSide.top,
        _OSMRTop = objectStartMenu.rightSide.top,
        _OSMRMiddle = objectStartMenu.rightSide.middle,
        _OSMRBottom = objectStartMenu.rightSide.bottom;

    //! //////////////////////////////////////////////////////////////////////////////////

    //! Objects end

    //! //////////////////////////////////////////////////////////////////////////////////


    //! /////////////////////////////////////////////////////////////////////////////////

    //! Functions

    //! /////////////////////////////////////////////////////////////////////////////////
    function addNewLinkToStartMenu(posInHTML, posInDB) {
        posInHTML.innerHTML = '';
        Object.values(posInDB).forEach(element => {
            let newLink = document.createElement('div');
            newLink.innerHTML = `${element}`;
            posInHTML.appendChild(newLink);
        });
    }

    function chosenLinkName(obj) {
        let res = [];
        for (let key in obj) {
            res.push(key);
        }
        return res;
    }
    function chosenLinkFileName(obj) {
        let res = [];
        for (let key in obj) {
            res.push(obj[key]);
        }
        return res;
    }


    function openNewWindow(buttonIcon) {
        buttonIcon.addEventListener("click", function (e) {
            let newWindow = document.createElement('div'),
                windowHeader = document.createElement('div'),
                headerWindow = document.createElement('div'),
                windowControl = document.createElement('div');

            let windowBody = document.createElement('div');

            let windowFooter = document.createElement('div');

            // const linksInObjectStartMenu

            for (let item in _OSMRMiddle) {
                windowControl.innerHTML = ` 
                    <div class="window-control__icon">
                        <img src="img/icons/${chosenLinkFileName(_OSMRMiddle)}.png" alt="Control Panel"> ${chosenLinkName(_OSMRMiddle)}
                    </div>
                    <div class="window-control__buttons">
                        <button id='collapse'>_</button>
                        <button id='resize'>⃢</button>
                        <button id='close'>✖</button>
                    </div>`;
            }



            newWindow.classList.add("window"),
                windowHeader.classList.add('window__header'),
                headerWindow.classList.add('header-window'),
                windowControl.classList.add('window-control'),
                windowBody.classList.add('window__body', 'body-window'),
                windowFooter.classList.add('window__footer');

            workTable.appendChild(newWindow);
            newWindow.appendChild(windowHeader) && newWindow.appendChild(windowBody) && newWindow.appendChild(windowFooter);
            windowHeader.appendChild(headerWindow);
            headerWindow.appendChild(windowControl);

            let windowControlButtons = windowControl.querySelectorAll('button');
            windowControlButtons.forEach(element => {
                element.addEventListener("click", function (e) {
                    if (element.id == 'close') {
                        closeWindow();
                    } else if (element.id == 'collapse') {

                        console.log('collapse');
                    } else {
                        console.log(element.offsetParent.clientHeight);
                        element.offsetParent.style = 'width: 100%; height: 100%;';

                        console.log(element.offsetParent.clientHeight);
                    }
                });

            });

            return console.log('new window created');

        });
    }
    function closeWindow() {
        let allOpenedWindows = workTable.querySelector('.window');
        allOpenedWindows.remove();
    }

    function getDate() {
        setInterval(getDate, 30000);
        const dateAndTime = new Date(),
            year = document.querySelector('#year'),
            month = document.querySelector('#month'),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes');
        // timeUpdateInterval = setInterval(setTimeClock(), 1000);

        function addZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else return num;
        }

        function setTimeClock() {
            year.innerHTML = `${dateAndTime.getFullYear()}/`,
                month.innerHTML = addZero(`${dateAndTime.getMonth() + 1}`),
                days.innerHTML = addZero(`${dateAndTime.getDate()}`),
                hours.innerHTML = addZero(`${dateAndTime.getHours()}:`),
                minutes.innerHTML = addZero(`${dateAndTime.getMinutes()}`);


        }
        setTimeClock();

    }
    function addNewIcon() {
        workTable.innerHTML = '';
        workTableIcons.forEach((key, value) => {
            let item = document.createElement('div');
            item.classList.add('item-worktable');
            item.innerHTML = `<div class=\"item-worktable__img\">\<img class=\"ibg\" src=\"img/worktable/${value + 1}.png\" alt=\"icon\"></div><div class=\"item-worktable__name\">${key}</div>`;
            workTable.append(item);
            selection(item);
        });
    }
    function selection(element) {
        element.addEventListener("click", function (e) {
            if (element.classList.contains('selected')) {
                removeClass(element, 'selected');
            } else {
                let itemsWithSelectedClass = document.querySelectorAll('.selected');
                if (itemsWithSelectedClass.length > 0) {
                    itemsWithSelectedClass.forEach(e => {
                        removeClass(e, 'selected');
                    });
                }
                addClass(element, 'selected');
            }
        });
    }
    function addClass(element, className) {
        element.classList.add(className);
    }
    function removeClass(element, className) {
        element.classList.remove(className);
    }
    function toggleClass(usedElement, className, openingElement = usedElement) {
        usedElement.addEventListener('click', () => {
            openingElement.classList.toggle(className);
        });
    }
    function addAndRemoveClass(usedElement, openingElement = usedElement, classNameToAdd = 'show-modal', classNameToRemove = 'hide-modal') {
        usedElement.addEventListener("click", () => {
            if (openingElement.classList.contains(classNameToRemove)) {
                openingElement.classList.remove(classNameToRemove);
                openingElement.classList.add(classNameToAdd);
            } else {
                openingElement.classList.remove(classNameToAdd);
                openingElement.classList.add(classNameToRemove);
            }
        });
    }

    function callingContextMenu() {
        let i = 0;
        const bg = document.querySelector('.ibg');

        bg.addEventListener('contextmenu', (e) => {

            e.preventDefault();
            if (i == 1) {
                counterMenu = document.querySelector('.right-click-menu');
                counterMenu.remove();
                i--;
                createNewMenu();
                i++;
            } else {
                createNewMenu();
                i++;
            }

            function createNewMenu() {
                const contextMenu = document.createElement('div');
                contextMenu.classList.add('right-click-menu');
                contextMenu.innerHTML = `
            <ul class="right-click-menu__block">
                        <li class="right-click-menu__item "><span>Arrange Icons By</span> <i class="icon-arrow"></i>
                            <div class="expanded">
                                <ul class="expanded__block">
                                    <li class="expanded__item">Name</a>
                                    <li class="expanded__item">Size</li>
                                    <li class="expanded__item">Type</li>
                                    <li class="expanded__item">Modified</li>
                                </ul>
                                <ul class="expanded__block">
                                    <li class="expanded__item disabled-a">Show in Groups</li>
                                    <li class="expanded__item">Auto Arrange</li>
                                    <li class="expanded__item">Align to Grid</li>
                                </ul>
                                <ul class="expanded__block">
                                    <li class="expanded__item disabled-a">Show Desktop Icons</li>
                                    <li class="expanded__item">Lock Web Items on Desktop</li>
                                    <li class="expanded__item">Run Desktop Cleanup Wizard</li>
                                    </ul>
                                    <ul class="expanded__block">
                                        <li class="expanded__item">Windows NT 4.0</li>
                                        <li class="expanded__item">Windows NT 5.0</li>
                                        <li class="expanded__item">Windows 2000 Server</li>
                                        <li class="expanded__item">Windows Server 2003</li>
                                        <li class="expanded__item">Windows Server 2008</li>
                                        <li class="expanded__item">Windows Server 2008 R2</li>
                                        <li class="expanded__item">Windows Server 2012</li>
                                        <li class="expanded__item">Windows Server 2012 R2</li>
                                        <li class="expanded__item">Windows Server 2016</li>
                                        <li class="expanded__item">Windows Server 2019</li>
                                        <li class="expanded__item">Windows Server 2022</li>
                                </ul>
                            </div>
                        </li>
                        <li class="right-click-menu__item">Refresh</li>
                        <li class="right-click-menu__item">JULIJA</li>
                        <a href='../Healthy_Switcher-github/Fresh_food/index.html' class="right-click-menu__item">Start Healthy Switcher</a>
                        <a href='../portfolioAlexG/index.html' class="right-click-menu__item">Start Alex Devloper</a>
                        <a href='../Car_repair/index.html' class="right-click-menu__item">Start Car repair</a>
                        <a href='https://www.microsoft.com/en-gb' class="right-click-menu__item">Start Microsoft Website</a>
                        <a href='https://windows93.net' class="right-click-menu__item">Start Windows 93</a>
                        <a href='https://windows96.net' class="right-click-menu__item">Start Windows 96</a>
                        <a href='https://98.js.org/' class="right-click-menu__item">Start Windows 98</a>
                        <a href='https://www.pokernow.club/games/pglWdm5bG7Birk2vW5DQwM8N9' class="right-click-menu__item">Start Poker Now Game</a>\
                        <a href='https://ctc.ru' class="right-click-menu__item">Start STS (СТС)</a>
                        <a href='ms-calculator://' class="right-click-menu__item">Start Calc</a>
                        <a href='winver://' class="right-click-menu__item">Start winver</a>
                        <a href='cmd://' class="right-click-menu__item">Start Cmd</a>
                    </ul>
                    <ul class="right-click-menu__block ">
                        <li class="right-click-menu__item disabled-a">Paste</li>
                        <li class="right-click-menu__item disabled-a">Paste Shortcut</li>
                    </ul>
                    <ul class="right-click-menu__block ">
                        <li class="right-click-menu__item"><span>New</span><i class="icon-arrow"></i>
                            <div class="expanded">
                                <ul class="expanded__block">
                                    <li class="expanded__item">Name</li>
                                    <li class="expanded__item">Size</li>
                                    <li class="expanded__item">Type</li>
                                    <li class="expanded__item">Modified</li>
                                </ul>
                                <ul class="expanded__block">
                                    <li class="expanded__item disabled-a">Show in Groups</li>
                                    <li class="expanded__item">Auto Arrange</li>
                                    <li class="expanded__item">Align to Grid</li>
                                </ul>
                                <ul class="expanded__block">
                                    <li class="expanded__item disabled-a">Show Desktop Icons</li>
                                    <li class="expanded__item">Lock Web Items on Desktop</li>
                                    <li class="expanded__item">Run Desktop Cleanup Wizard</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul class="right-click-menu__block ">
                        <li class="right-click-menu__item ">Properties</a>
                    </ul>
            `;
                contextMenu.style.cssText = `left:${e.clientX}px; top:${e.clientY}px`;
                workTable.append(contextMenu);
            }
            bg.addEventListener('click', () => {
                if (i == 1) {
                    const counterMenu = document.querySelector('.right-click-menu');
                    counterMenu.remove();
                    i--;
                }
            });
        });
    }

    class Window {
        constructor() {
        }
        createWindow() {
            let newWindow = document.createElement('div'),
                newWindowHeader = document.createElement('div'),
                newWindowBody = document.createElement('div'),
                newWindowFooter = document.createElement('div');
            newWindow.classList.add('window');
            newWindowHeader.classList.add('window__header');
            newWindowBody.classList.add('window__body');
            newWindowFooter.classList.add('window__footer');
            workTable.append(newWindow);
            newWindow.append(newWindowHeader);
            newWindow.append(newWindowBody);
            newWindow.append(newWindowFooter);
            console.log('window created');
            createWindowHeader();

        }
        createWindowHeader(newWindowHeader, ...windowControlButton) {
            let newWindowHeaderName = document.createElement('div');
            newWindowHeaderName.classList.add('window__header-name');
            newWindowHeaderName.textContent = `${newWindowHeader}`;
            let newWindowHeader2 = workTable.querySelector('.window__header').append(newWindowHeaderName);
            let newWindowControlButtons = document.createElement('div');
            newWindowControlButtons.classList.add('window__header-buttons');
            windowControlButton.forEach(btn => {
                let newButton = document.createElement('button');
                newButton.classList.add('btn', 'window__header-button');
                newWindowControlButtons.append(newButton);
                let newButtonIcon = document.createElement('i');
                newButtonIcon.classList.add('fa-sharp', 'fa-solid', 'fa-question');
                newButton.append(newButtonIcon);
            });
        }
    }
    // const screenPropor = new Window();
    // screenPropor.createWindow();
    // screenPropor.createWindowHeader('dd');


    //! //////////////////////////////////////////////////////////////////////////////////

    //! Functions end

    //! //////////////////////////////////////////////////////////////////////////////////

    //! modal
    // modalTriger.forEach(element => {
    //     element.addEventListener('click', () => {
    //         removeClass(element, 'hide-modal');
    //         addClass(element, 'show-modal');
    // element.classList.add('show-modal');
    // element.classList.remove('hide-modal');

    //     });
    // });
    // modalClose.forEach(element => {
    //     element.addEventListener("click", () => {
    //         addClass(element, 'hide-modal');
    //         removeClass(element, 'show-modal');
    //     });
    // });
    callingContextMenu();

    //! functions calling

    // start menu 

    addNewIcon();
    getDate();

    openNewWindow(startMenuLinks);
    addAndRemoveClass(startMenuButton, startMenu);
    addAndRemoveClass(modalTriger[1], shutdown);
    addAndRemoveClass(modalClose[0], shutdown);

});


//!!! My test
// function isPangram(string) {
//     string = string.split(' ').join('');
//     return new Set(string).size == 27 ? 'is pangram' : 'in not a pangram';
// }

// const text = 'The quick brown fox jumps over the lazy dog';


// console.log(isPangram(text));


// let res = 0;

// function deepCount(array) {
//     array.forEach(element => {
//         res++;
//         if (typeof (element) == typeof ([])) {
//             res++;
//             deepCount(element);
//         }
//     });
//     return res;
// }
// console.log(deepCount([1, 5, 3]));
// /onsole.log(deepCount(["1", 5, "3", ["10"]]));
// console.log(deepCount([1, 2, [3, 4, [5]]]));
// console.log(deepCount([]));
// console.log(deepCount([[[[[[[[[]]]]]]]]]));



// const names = ['Ivan', 'Alex', 'Masha', 'Sasha', 'Misha'];
// const shortNames = names.filter(item => {
//     return item.length < 5;
// });
// console.log(shortNames);

// const filterByLitter = names.filter(item => item.includes('A'));
// console.log(filterByLitter);

// const methodMap = names.map(item => item.toLocaleLowerCase());
// console.log(methodMap);


// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// let objToArray = Object.entries(obj);
// let humanNames = objToArray.filter(item => item[1] === 'person')
//     .map(item => item[0]);
// console.log(humanNames);



// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];
// function averageRating(arr) {
//     let objToArray = arr.map(item => Object.entries(item))
//         .map(item => item[1])
//         .map(item => item[1])
//         .reduce((sum, curr) => {
//             return sum + curr;
//         });
//     return objToArray / arr.length;
// }
// console.log(averageRating(films));

// for (let i = 0; i < films.length; i++) {
//     console.log(Object.entries(films[i]));
// }

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }
// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
//     return arr.map(item => item.name).join(', ');

    // return arr.reduce((film, index) => {
    //     return `${typeof (film) === 'object' ? film.name : film}, ${index.name}`;
    // });
// }
// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
//     arr.forEach((item, id) => {
//         item.id = id;
        // return item;
    // });
    // return arr;

    // return arr.map((film, i) => {
    //     console.log(film, ++i);
    //     film.id = i;
    //     return film;
    // });
// }


// const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);
// console.log(films);

// function checkFilms(arr) {
//     return arr.every(item => item.id || item.id === 0 ? true : false);

// }
// console.log(checkFilms(tranformedArray));


