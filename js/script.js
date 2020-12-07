let array = new Data();

let data = array.render();


let getSel = x => document.querySelector(x);
/* LOGO*/
document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.box_menu').classList.toggle('box_menu_active');
    getSel('form').reset();
}
// ----------------------------------

//  get img
let item_arr = document.getElementsByClassName('img');
let item = document.getElementsByClassName('item');
let itemTitle = document.getElementsByClassName('imgText');

//get label

let label_arr = document.getElementsByClassName('title');

// -------------------------------------

// add items to index.html
for (let i = 0; i < item_arr.length; i++) {
    item_arr[i].src = data[i].img;
}

// add title to label index.html
for (let i = 0; i < label_arr.length; i++) {
    label_arr[i].textContent = data[i].title;
}

// add text to next side item index.html
for (let i = 0; i < itemTitle.length; i++) {
    itemTitle[i].textContent = data[i].title;
}


//  close news window

function close() {
    getSel('.main-news').innerHTML = '';
    getSel('.news').style.display = 'none';
    getSel('.main').style.display = 'flex';
    getSel('.footer').style.display = 'flex';

}

getSel('.close').onclick = () => {
    close()
}

getSel('.news').onclick = () => {
    close()
}

getSel('.close').addEventListener('touches', close);
getSel('.news').addEventListener('touches', close);


// change screen class main

function changeScreen() {
    getSel('.news').style.display = 'flex';
    getSel('.main').style.display = 'none';
    getSel('.footer').style.display = 'none';
    getSel('.main-news').innerHTML = '';
}

function newsFooter(i) {
    getSel('.main-news').innerHTML += `<div><img src="${data[i].img}" alt="">
                                         <div> 
                                          <h1> ${data[i].title}</h1>
                                          <span>${data[i].text}</span>
                                         </div>
                                      </div>`
}

// work with footer--------------------------------------

// show hullepaff`s news
getSel('#foot-hull').onclick = () => {
    changeScreen();
    for (let i = 0; i < 4; i++) {
        newsFooter(i);
    }
};

// show gryffindor`s news
getSel('#foot-gryff').onclick = () => {
    changeScreen();
    for (let i = 4; i < 8; i++) {
        newsFooter(i);
    }
}

// show slytherin`s new
getSel('#foot-slyth').onclick = () => {
    changeScreen();
    for (let i = 8; i < 12; i++) {
        newsFooter(i);
    }
}

// show ravenclaw`s news
getSel('#foot-raven').onclick = () => {
    changeScreen();
    for (let i = 12; i < 16; i++) {
        newsFooter(i);
    }
}

// one image for one new`s-----------------------------------------

for (let j = 0; j < item_arr.length; j++) {
    item[j].onclick = () => {
        changeScreen();
        getSel('.main-news').innerHTML = `<div>
                                          <img  src="${data[j].img}" alt="">
                                          <div style="margin:50px auto"> 
                                           <h1> ${data[j].title}</h1>
                                           <span style="line-height:30px">${data[j].text}</span>
                                          </div>
                                       </div>`
    }

}

//-----------------------------------checkbox menu

let check = document.getElementsByClassName('check');

getSel('#newsList').onclick = () => {
    changeScreen();
        for (let i = 0; i < check.length; i++) {
            if (check[i].checked) { 
                newsFooter(i);
            }
        }
    return false;
};