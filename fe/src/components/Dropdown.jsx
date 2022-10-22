import Header from "./Header"
import Article from "./Article"
import data from "../data/data.json"

const Dropdown = () => {
    return (
        <div id="dropdown">
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