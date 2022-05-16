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

    if(display[0]) {
        return (
            <ul>
                {display.map((i, index) => <li key={index}>{i.text} - {i.author}</li>)}
            </ul>
            )
   }

}


export default Data