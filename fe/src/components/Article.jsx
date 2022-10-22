const Article = (props) => {
    const { title, description, url } = props
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