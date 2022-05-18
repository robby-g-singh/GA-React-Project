const About = () => {
    return (
        <div className="about-page">
            <h1>About Page</h1>
            <br></br>
            <h2>My first React App!</h2>
            <br></br>
            <p className="first-paragraph">
                As a novice to React, I found this project to be a great way to test my skills in React.
                The project was a great way to understand APIs and how they work. 
            </p>
            
            <p className="second-paragraph">
                The project was built using create-react-app, React Components and React's built-in useState and React Router libraries.
                The Components are ultimately divided into two sections, one for the different pages in the nav bar
                and one for the data that will be showcased on the different pages. The Home Component is relatively simple,
                it features a random quote from the API that regenerates whenever the page is refreshed. 
            </p>

            <p className="third-paragraph">
                The Quotes and Author Components feature similar funtionality. Since the API consists of 1000+
                quotes, I decided to have the app show only 20 at a time - both components also regenerate whenever
                the page is refreshed. There are some functional differences that I implemented, and am proud of, for the
                Authors and Quotes Components. In the former, I only listed names of authors that had more than one quote
                in the data. In order to do so, I needed to create an Array that stored just author names from the array of
                objects returned from the API call, and then stripped the duplicates from the array by creating a set and 
                passing the array to it. In the Quotes Componenent, since the API returned an array of objects - some of the 
                author keys are null since the quote is from an unknown source. So I implemented a short condition that if
                the author is null for that particular object, then to set it to 'Unknown.'
            </p>

            <p className="fourth-paragraph">
                Overall, this project was a great introduction to React from a real coding experience. After a couple
                weeks of class time, homework, etc. we were thrown to the React wolf. I like to think I came out
                rather successful and with a solid understanding, for a beginner, as to what React is and truly how 
                powerful of a framework it is.
            </p>
        </div>
    )
}

export default About