const loadCategories = async()=> {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategories(data.data.news_category);
}

const displayCategories = (headLine) =>{
    console.log(headLine)
    const headLineContainer = document.getElementById('headline-container');
    headLine.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <a onclick="loadNewsDetails('${element.category_id}')"> ${element.category_name} </a>
    
        `;
        headLineContainer.appendChild(newDiv);
    });
}

const loadNewsDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
}



loadCategories();