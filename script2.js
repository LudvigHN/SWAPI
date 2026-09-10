const listDOM = document.querySelector(".list")

Promise.all([1, 2, 3].map(i =>
    fetch(`https://swapi.dev/api/people/?page=${i}`)
        .then(response => response.json())
))
    .then(datas => {
        datas.forEach(data => {
            data.results.forEach(person => {
                const listItem = document.createElement("li")
                listItem.textContent = person.name
                listItem.textContent += " appers in: "
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

        });

    })

