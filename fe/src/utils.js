import {runBert} from './index.js'
import {allSides} from './allsides.js';
export const getArticleFromSource = async (source, keywords) => {
  const s = allSides.find((element) => element.name === source)
  const articles = await fetch(
      'https://newsapi.org/v2/everything?searchIn=content&q=' + keywords + '&domains=' + s.url + '&apiKey=552e3820da4c470ea9af9c15ed96a7ff',
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