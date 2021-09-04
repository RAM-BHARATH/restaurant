const content = document.getElementById('content');
// const tabs = document.getElementById('tabs');

function header(){
    const element = document.createElement('div');
    const h1El = document.createElement('h1');
    h1El.id = "heading";
    const h3El = document.createElement('h3');
    h1El.innerText = "The Biriyani Shop";
    h3El.innerText = "Taste it from the best";
    element.id = "header";
    element.appendChild(h1El);
    element.appendChild(h3El);
    return element;
}

function navbar(){
  const outEl = document.createElement('div');
  outEl.classList.add('navbar');
  const list = document.createElement('ul');
  list.classList.add('navlist');
  const el1 = document.createElement('li');
  el1.innerText='About';
  const el2 = document.createElement('li');
  el2.innerText='Menu';
  const el3 = document.createElement('li');
  el3.innerText='Contact Us';

  el1.id = 'choice-about';
  el2.id = 'choice-menu';
  el3.id = 'choice-contact';

  list.appendChild(el1);
  list.appendChild(el2);
  list.appendChild(el3);
  outEl.appendChild(list);
  
  return outEl;
}
content.appendChild(header());
content.appendChild(navbar());
const about_button = document.getElementById('choice-about');
const menu_button = document.getElementById('choice-menu');
const contact_button = document.getElementById('choice-contact');

console.log(about_button);
console.log(menu_button);
console.log(contact_button);

function aboutBlock(){
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('tab');
  aboutContainer.id = 'about';
  // const head = document.createElement('h3');
  // head.classList.add('tab-head');
  // head.innerText = 'About'
  const para = document.createElement('p');
  para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel odit, totam excepturi voluptatibus laborum ea reprehenderit molestias animi quam nostrum dolorem unde magni eligendi modi sequi neque? Illum, adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis sint commodi!Ea harum suscipit perferendis est cum minus aperiam, delectus, quisquam ducimus qui illo dolor, necessitatibus maiores. Quasi, commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum totam fuga deserunt vero! Quia sunt aut ipsum ratione similique, eaque facere accusamus repudiandae. Numquam animi possimus autem quibusdam veritatis voluptatem?'
  // aboutContainer.appendChild(head);
  aboutContainer.appendChild(para);

  return aboutContainer;
}

function menuBlock(){
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('tab');
  menuContainer.id = 'menu';
  // const head = document.createElement('h3');
  // head.classList.add('tab-head');
  // head.innerText = 'Menu';
  const menuBox = document.createElement('div');
  menuBox.id = 'menubox';

  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('menu-item');
  const img1 = document.createElement('img');
  img1.src = '../dist/assets/Hyderabadi_Chicken_Biryani.jpg';
  const item1Name = document.createElement('figcaption');
  item1Name.classList.add('item-name');
  item1Name.innerText='Hyderabadi Chicken Briyani';

  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menu-item');
  const img2 = document.createElement('img');
  img2.src = '../dist/assets/Kolkata_Biryani.jpg';
  const item2Name = document.createElement('figcaption');
  item2Name.classList.add('item-name');
  item2Name.innerText = 'Kolkata Briyani';

  const menuItem3 = document.createElement('div');
  menuItem3.classList.add('menu-item');
  const img3 = document.createElement('img');
  img3.src = '../dist/assets/Dindugal_Biryani.jpg';
  const item3Name = document.createElement('figcaption');
  item3Name.classList.add('item-name');
  item3Name.innerText = 'Dindugal Briyani';

  const menuItem4 = document.createElement('div');
  const img4 = document.createElement('img');
  img4.src = '../dist/assets/Ambur_Biryani.jpg';
  const item4Name = document.createElement('figcaption');
  item4Name.classList.add('item-name');
  item4Name.innerText = 'Ambur Briyani';

  menuItem1.appendChild(img1);
  menuItem1.appendChild(item1Name);
  menuItem2.appendChild(img2);
  menuItem2.appendChild(item2Name);
  menuItem3.appendChild(img3);
  menuItem3.appendChild(item3Name);
  menuItem4.appendChild(img4);
  menuItem4.appendChild(item4Name);

  menuBox.appendChild(menuItem1);
  menuBox.appendChild(menuItem2);
  menuBox.appendChild(menuItem3);
  menuBox.appendChild(menuItem4);

  // menuContainer.appendChild(head);
  menuContainer.appendChild(menuBox);

  return menuContainer;
}

function embedMaps(){
  const mapHolder = document.createElement('div');
  mapHolder.id = 'map-holder';
  const displayGoogleMap = document.createElement('div');
  displayGoogleMap.id = 'display-googlemap';
  const mapFrame = document.createElement('iframe');
  mapFrame.border = '0';
  mapFrame.id = 'map-frame';
  mapFrame.src = 'https://www.google.com/maps/embed/v1/place?q=jolly+biryani+hotel,+dharmapuri&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8';
  displayGoogleMap.appendChild(mapFrame);
  mapHolder.appendChild(displayGoogleMap);

  return mapHolder;
}

function contactContainer(){
  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.classList.add('tab');
  // const head = document.createElement('h1');
  // head.innerText = 'Contact Us';
  // head.classList.add('tab-head');
  const phoneDiv = document.createElement('div');
  const para1 = document.createElement('p');
  para1.innerText = 'Phone: 912 345 6789';
  phoneDiv.appendChild(para1);
  const emailDiv = document.createElement('div');
  const para2 = document.createElement('p');
  para2.innerHTML = 'Email: ';
  const a = document.createElement('a');
  a.innerText = 'biriyani@biriyani_shop.com';
  a.href = 'mailto:biriyani@biriyani_shop.com';
  para2.appendChild(a);
  emailDiv.appendChild(para2);
  // contact.appendChild(head);
  contact.appendChild(phoneDiv);
  contact.appendChild(emailDiv);
  contact.appendChild(embedMaps());

  return contact;
}

function tabsContainer(){
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  tabs.appendChild(aboutBlock());
  tabs.appendChild(menuBlock());
  tabs.appendChild(contactContainer());
  return tabs;
}

content.appendChild(tabsContainer());

const about = document.getElementById('about');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

about_button.addEventListener('click',function(){
  console.log('Hello1');
  menu.style.display= 'none';
  about.style.display = 'block';
  contact.style.display = 'none';
  resetButtonColor();
  setButtonColor('a');
});
menu_button.addEventListener('click',function(){
  console.log('Hello2');
  menu.style.display= 'block';
  about.style.display = 'none';
  contact.style.display = 'none';
  resetButtonColor();
  setButtonColor('m')
});
contact_button.addEventListener('click',function(){
  console.log('Hello3');
  menu.style.display= 'none';
  about.style.display = 'none';
  contact.style.display = 'block';
  resetButtonColor();
  setButtonColor('c');
});
function setButtonColor(buttonChar){
  if(buttonChar === 'm'){
    menu_button.style.color = '#000';
    menu_button.style.background = '#ffffff';
  }
  else if(buttonChar === 'a'){
    about_button.style.background = '#ffffff';
    about_button.style.color = '#000';
  }
  else if(buttonChar === 'c'){
    contact_button.style.background = '#ffffff';
    contact_button.style.color = '#000';
  }

}
function resetButtonColor(){
  about_button.style.background = '#080836';
  menu_button.style.background = '#080836';
  contact_button.style.background = '#080836';
  about_button.style.color = '#fff';
  menu_button.style.color = '#fff';
  contact_button.style.color = '#fff';
}

console.log(about);
console.log(menu);
console.log(contact);
setButtonColor('a');
// tabs.appendChild(inputOne());
// tabs.appendChild(labelOne());
// tabs.appendChild(divTabOne());
// tabs.appendChild(inputTwo());
// tabs.appendChild(labelTwo());
// tabs.appendChild(divTabTwo());

