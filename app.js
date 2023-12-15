// Progression 1: create a function and fetch the api using axios

function getData() {
  const  getBlog = document.getElementById('blog')

  axios
   .get(
    'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=37fe826fc976e55b36d9ef6c1445911d'
  )
  .then((res)=>{
    console.log(res)
    const listOfArticles = res.data.articles

    listOfArticles.forEach((article) =>  {
      const getArticle = document.createElement('div')
      getArticle.setAttribute('id','article')
      getArticle.setAttribute('class','article')

      const title = document.createElement('h3')
      const content = document.createElement('p')
      const img = document.createElement('img')

      title.innerText = article.title
      content.innerText = article.content
      img.setAttribute('src', article.image)

      getArticle.append(title, img, content)
      getBlog.appendChild(getArticle)
    })
  })
}
getData()