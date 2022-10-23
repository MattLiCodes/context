import React, { useState, useEffect } from 'react';
import { getArticleFromSource } from '../utils';

export const Article = (props) => {
    const { source } = props
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        const getData = async () => {
            const article = await getArticleFromSource(source, "Taylor Swift")
            console.log(article)
            setTitle(article.title)
            setDescription(article.description)
            setUrl(article.url)
        }
        getData()
    })

    return (
        <div id="article">
            <img 
                id="logo" 
                src="https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg" 
                alt="news icon" 
                width={30}
                height={30}
            />
            <div id="article-infoContainer">
                <a id="title" href={ url }>{ title }</a>
                <p id="description">{ description }</p>
                <img id="allsides" src="" alt="AllSides ranking" />
            </div>
        </div>
    )
}

export default Article