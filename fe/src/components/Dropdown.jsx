import Header from "./Header"
import Article from "./Article"
import MinimizedDropdown from "./MinimizedDropdown"
import { useState } from "react"

const Dropdown = () => {

    const [isMinimized, setIsMinimized] = useState(false)

    
    const handleClick = () => {
        setIsMinimized(prevIsMinimized => !prevIsMinimized)
    }

    const selectedSources = ["CNN", "Fox News", "NPR", "Time Magazine", "The Daily Wire"];
    const selectedSources2 = ["The Hill", "The Atlantic", "Politico", "Washington Times", "The Daily Wire"];

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