const searchWrapper = document.querySelector('.box');
const inputBox = searchWrapper.querySelector('input');
const sugesBox = searchWrapper.querySelector('.list');
const icon = searchWrapper.querySelector('.icon');
let linkTag = searchWrapper.querySelector('a');
let webLink;

inputBox.onkeyup =(e)=> {
    let userData = e.target.value;
    let emptyArray = [];

    if(e.key === 'Enter'){
        if(userData){
            window.open(`https://www.google.com/search?q=${userData}`, '_blank');
        }
    }

    if (userData){
        icon.onclick = () =>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute('href',webLink);
            linkTag.click();
        }
    
        emptyArray = sugestoes.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`
        })
        searchWrapper.classList.add('active');
        ShowSuggeststions(emptyArray);
        let allList = sugesBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute('onclick', 'select(this)');
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchWrapper.classList.contains('active')) {
                searchWrapper.classList.remove('active');
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!searchWrapper.contains(e.target)) {
                searchWrapper.classList.remove('active');
            }
        });        
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () =>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute('href',webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove('active');
}



function ShowSuggeststions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userData}</li>`
    }
    else{
        listData = list.join('');
    }

    sugesBox.innerHTML = listData;
}