import Header from "./Header"
import Article from "./Article"
import MinimizedDropdown from "./MinimizedDropdown"
import data from "../data/data.json"
import { useState } from "react"

const Dropdown = () => {

    const [isMinimized, setIsMinimized] = useState(false)

    const handleClick = () => {
        setIsMinimized(prevIsMinimized => !prevIsMinimized)
    }

    return isMinimized ? (<div id="minimizedDropdown" onClick={handleClick}><MinimizedDropdown /></div>) 
    : (
        <div id="dropdown" onClick={handleClick}>
            <Header />
            {
                data.map((element) => {
                    return (
                        <Article
                            key={element.id}
                            title={element.title}
                            description={element.description}
                            url={element.url}
                        />
                    )
                })
            }
        </div>
    )
}

export default Dropdown