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
        <a> ${element.category_name} </a>
        `;
        headLineContainer.appendChild(newDiv);
    });
}



loadCategories();