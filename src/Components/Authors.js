import AuthorsData from './Data/AuthorsData'
import '../stylesheets/Authors.css'

const Authors = () => {
    return (
        <div className="authors-page">
            <h1>Authors Page</h1>
            <h2>View the featured authors in this API!</h2>
            <ul className="authors-list">
                <AuthorsData />
            </ul>
        </div>
    )
}

export default Authors