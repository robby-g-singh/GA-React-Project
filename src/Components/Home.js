const Home = () => {
    return (
        <div className="home-page">
            <h1>Quotes App</h1>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Quotes</li>
                    <li>Authors</li>
                </ul>
            </nav>
            <p className="home-bio">
                This app is dope. Use this app for all your inspirational quote needs!
            </p>
        </div>
    )
}

export default Home