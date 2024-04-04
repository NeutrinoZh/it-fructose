const api = {
    getListOfArticles: async () => {
        let respone = await fetch(api.baseUrl + "list-of-articles.md", { cache: "no-cache" })
        if (!respone.ok)
            throw new Error(`Failed fetch list of articles. ${respone.status}: ${respone.statusText}`)
        
        let articles = (await respone.text()).split("!!ARTICLE!!")
        articles.shift()
        return articles
    },
    baseUrl: 'https://raw.githubusercontent.com/NeutrinoZh/blog/master/'
}

export default api;