import React, { useState, useEffect } from 'react';
import { getArticleFromSource } from '../utils';
import {allSides} from '../allsides.js';
import n1 from '../data/images/-1.jpg';
import n2 from '../data/images/-2.jpg';
import z from '../data/images/0.jpg';
import p1 from '../data/images/1.jpg';
import p2 from '../data/images/2.jpg';

const inddict = [n2, n1, z, p1, p2]

export const Article = (props) => {
    const { source } = props
    const s = allSides.find((element) => element.name === source)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [ready, setReady] = useState(true);

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

    return ready ? (
        <div id="article">
            <img 
                id="logo" 
                src={s.imgUrl} 
                alt="news icon" 
                width={30}
                height={30}
            />
            <div id="article-infoContainer">
                <a id="title" href={ url }>{ title }</a>
                <p id="description">{ description }</p>
                <img id="allsides" src={inddict[s.bias + 2]} width={30} height={30} alt="AllSides ranking" />
            </div>
        </div>
    ): (
        <div id="article"></div>
    )
}

export default Article