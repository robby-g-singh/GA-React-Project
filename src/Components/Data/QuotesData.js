import { useEffect, useState } from "react";

const Data = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(items => setData(items))
    }, [])

    
    let display = []

    for(let i = 0; i < 20; i++) {
        display[i] = data[Math.floor(Math.random()*data.length)]
        
    }

    for(let i = 0; i < data.length; i++) {
        if(!data[i].author) {
            data[i].author = 'Unknown'
        }
        
    }

    if(display[0]) {
        return (
            <ul className="quotes-list">
                {display.map((i, index) => <li key={index}>{i.text} - {i.author}</li>)}
            </ul>
            )
   }

}


export default Data

