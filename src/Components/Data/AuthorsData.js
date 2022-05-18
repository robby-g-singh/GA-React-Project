import { useEffect, useState } from "react";

const Authors = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(items => setData(items))
    }, [])

    
    if(data[0]) {
        const temp = [...data]
        let authors = []
        let duplicates = []

        
        for(let i = 0; i < temp.length; i++) {
            if(data[i].author) {
                authors.push(temp[i].author)
            }
        }

       const temp2 = [...authors].sort()

       for(let i = 0; i < temp2.length; i++) {
            if(temp2[i + 1] === temp2[i]) {
                duplicates.push(temp2[i])
            }
       }


       const duplicatesSet = new Set(duplicates)

       let display = []
       const duplicatesArray = [...duplicatesSet]

       for(let i = 0; i < 20; i++) {
           display[i] = duplicatesArray[Math.floor(Math.random()*duplicatesArray.length)]
       }

       console.log(display)
       

       return (
        <div>
            <ul className="authors-list">
                {display.map((i, index) => <li key={index}>{i}</li>)}
            </ul>
            
        </div>
        )

    
        
    }

}


export default Authors