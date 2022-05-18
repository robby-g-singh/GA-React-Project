import Data from "./Data/QuotesData"

const Quotes = () => {
    return (
        <div className="quotes-page">
            <h1>Quotes Page</h1>
            <h2>This page regenerates 20 quotes at a time whenever refreshed. Keep at it until you read the one
                that resonates with you!
            </h2>
            <Data />
        </div>
    )
}

export default Quotes