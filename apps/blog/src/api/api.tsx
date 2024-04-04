const api = {
    getListOfArticles: async () => {
        let respone = await fetch(`${api.baseUrl}/list-of-articles.md`, { cache: "no-cache" })
        if (!respone.ok)
            throw new Error(`Failed fetch list of articles. ${respone.status}: ${respone.statusText}`)
        
        let articles = (await respone.text()).split("!!ARTICLE!!")
        articles.shift()
        return articles
    },
    getArticleByName: async (articleName : string) => {
        let respone = await fetch(`${api.baseUrl}/articles/${articleName}`, { cache: "no-cache" })
        if (!respone.ok)
            throw new Error(`Failed fetch article by name '${articleName}'. ${respone.status}: ${respone.statusText}`)
        
        return await respone.text()
    },
    baseUrl: 'https://raw.githubusercontent.com/NeutrinoZh/blog/master/'
}

export default api;