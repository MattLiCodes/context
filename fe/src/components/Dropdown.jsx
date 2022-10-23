import Header from "./Header"
import Article from "./Article"
import MinimizedDropdown from "./MinimizedDropdown"
import data from "../data/data.json"
import { useState } from "react"
import { getArticleFromSource } from "../utils"

const Dropdown = () => {

    const [isMinimized, setIsMinimized] = useState(false)

    
    const handleClick = () => {
        setIsMinimized(prevIsMinimized => !prevIsMinimized)
    }

    const selectedSources = ["cnn"];

    return isMinimized ? (<div id="minimizedDropdown" onClick={handleClick}><MinimizedDropdown /></div>) 
    : (
        <div id="dropdown" onClick={handleClick}>
            <Header />
            {
                selectedSources.map((element) => {
                    return (
                        <Article
                            key={element}
                            source={element}
                        />
                    )
                })
            }
        </div>
    )
}

export default Dropdown