const listDOM = document.querySelector(".list")

fetch("https://swapi.dev/api/people")
    .then(response => {
        return response.json()
        
        
    })
    .then(data =>{
        // listDOM.innerHTML = data.results.map(person => 
        //     `
        //     <li>
        //     ${person.name}
        //     </li>
        //     `).join("")
            data.results.forEach(person => {
                const listItem = document.createElement("li")
                listItem.textContent = person.name
                listItem.textContent+= ", appears in: "
                Promise.all(
                    person.films.map(film =>
                        fetch(film)
                        .then(response =>
                            response.json()
                        )
                    ))
                    .then(films => {
                        
                        
                        listItem.textContent+= films.map(film => film.title).join(", ");
                        
                        
                    })
                
               
                
                
                listDOM.append(listItem)
                
            });
            

        
    })