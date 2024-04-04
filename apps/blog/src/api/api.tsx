const api = {
    getListOfArticles: async () => {
        let respone = await fetch(api.baseUrl + "list-of-articles.md", { cache: "no-cache" })
        if (!respone.ok)
            throw new Error(`Failed fetch list of articles. response status: ${respone.status}: ${respone.statusText}`)
        return (await respone.text()).split("!!ARTICLE!!")
    },
    baseUrl: 'https://raw.githubusercontent.com/NeutrinoZh/blog/master/'
}

export default api;