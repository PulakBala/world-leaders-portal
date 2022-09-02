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
        <a onclick="loadNews('${element.category_id}')"> ${element.category_name} </a>
    
        `;
        headLineContainer.appendChild(newDiv);
    });
}

const loadNews = async id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsCategories(data.data)
}

const displayNewsCategories = details =>{
    const showNews = document.getElementById('show-news');
    console.log(details)
    details.forEach(element=>{
        const newDiv =document.createElement('div');
        newDiv.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                     <img src=" ${element.thumbnail_url} " class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title "> ${element.title} </h4>
                        <p class="card-text fs-5"> ${element.details.slice(0,340)} </p>
                        <div class="d-flex">
                           <div>
                               <img src=" ${element.author.img} " class="img-thumbnail rounded-start"  alt="..." style="width:80px; height:80px; border-radius:50%">
                           </div>
                           <div>
                               <p class="card-text fs-5"> ${element.author.name} </p>
                               <p class="card-text"> ${element.author.published_date} </p>
                           </div>
                           <div>
                                <p class ="pt-4 px-4 mx-4"> <i class="fa-solid fa-eye"> ${element.total_view} M </i> </p>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        `;
        showNews.appendChild(newDiv);
    })
    
}


loadCategories();