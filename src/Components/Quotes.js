import Data from "./Data/QuotesData"
import '../stylesheets/Quotes.css'

const Quotes = () => {
    return (
        <div className="quotes-page">
            <h1 id="quotes-heading">Quotes Page</h1>
            <h2 id="quotes-subheading">This page regenerates 20 quotes at a time whenever refreshed. Keep at it until you find the one
                that resonates with you!
            </h2>
            <div id="quotes-data">
                <Data />
            </div>
        </div>
    )
}

export default Quotes