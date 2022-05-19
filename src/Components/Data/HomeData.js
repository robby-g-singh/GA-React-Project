import { useEffect, useState } from "react";

const HomeData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(items => setData(items))
    }, [])

    for(let i = 0; i < data.length; i++) {
        if(!data[i].author) {
            data[i].author = 'Unknown'
        }
    }

    let quote = data[Math.floor(Math.random()*data.length)]

    console.log(quote)

    if(data[0]) {
        return (
            <div>
                <h1>{quote.text} - {quote.author}</h1>
            </div>
            )
   }

}


export default HomeData
