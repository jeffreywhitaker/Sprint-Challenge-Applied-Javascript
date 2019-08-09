// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headerContainer = document.querySelector('.header-container');
console.log(headerContainer);

function Header() {
    // create elements, add class and text content
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    let headerDateSpan = document.createElement('span');
    headerDateSpan.classList.add('date');
    headerDateSpan.textContent = "SMARCH 28, 2019";

    let headerH1 = document.createElement('h1');
    headerH1.textContent = "Lambda Times";

    let headerTempSpan = document.createElement('span');
    headerTempSpan.classList.add('temp');
    headerTempSpan.textContent = "98°";

    // properly nest the elements
    headerDiv.appendChild(headerDateSpan);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerTempSpan);

    // return finished header
    return headerDiv;
}

//call the function
let newHeader = Header();
headerContainer.appendChild(newHeader);

