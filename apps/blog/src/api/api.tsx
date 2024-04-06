import { notFound } from "next/navigation"

const api = {
    getListOfArticles: async () => {
        let response = await fetch(`${api.baseUrl}/list-of-articles.md`)
        if (!response.ok)
            throw new Error(`Failed fetch list of articles. ${response.status}: ${response.statusText}`)
        
        let articles = (await response.text()).split("!!ARTICLE!!")
        articles.shift()
        return articles
    },
    getArticleByName: async (articleName : string) => {
        let response = await fetch(`${api.baseUrl}/articles/${articleName}.md`)
        if (!response.ok)
            if (response.status == 404)
                notFound()
            else 
                throw new Error(`Failed fetch article by name ${articleName}. ${response.status}: ${response.statusText}`);
            
        return await response.text()
    },
    getAbout: async () => {
        let response = await fetch(`${api.baseUrl}/aboutMe.md`)
        if (!response.ok)
            throw new Error(`Failed fetch article 'about me'. ${response.status}: ${response.statusText}`);
            
        return await response.text()
    },
    baseUrl: 'https://raw.githubusercontent.com/NeutrinoZh/blog/master/'
}

export default api;