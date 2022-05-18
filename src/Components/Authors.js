import AuthorsData from './Data/AuthorsData'
import '../stylesheets/Authors.css'

const Authors = () => {
    return (
        <div className="authors-page">
            <h1 id="authors-heading">Authors</h1>
            <h2 id="authors-subheading">View the featured authors in this API!</h2>
            <ul className="authors-list">
                <AuthorsData />
            </ul>
        </div>
    )
}

export default Authors