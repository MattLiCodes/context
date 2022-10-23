import {runBert} from './index.js'
export const getArticleFromSource = async (source, keywords) => {
    const articles = await fetch(
      'https://newsapi.org/v2/everything?searchIn=content&q=' + keywords + '&sources=' + source + '&apiKey=188bd8b6df2a493c928f552125a6b78b',
    ).then(async response =>
        await response.json()
    ).then(data => {
      return data.articles
    //   const keys = [];
    //   const articles = data.articles;
    //   keys.push(keywords)

    //   console.log(runBert(keys));
    });
    const keys = [keywords];
    for (let i = 0; i < articles.length; i++) {
        keys.push(articles[i].title + " " + articles[i].description);
    }
    return await articles[await runBert(keys)];
}