const data = [
    {id: 1, name: "dog"},
    {id: 2, name: "cat"},
    {id: 3, name: "frog"},
    {id: 4, name: "horse"},
    {id: 5, name: "cheetah"},
];

function AnimalItem({id, name}) {
    return <li key={id}><i>Hi, mi name is {name}</i></li>
}


function ListOfAnimals() {
    return (
        <ul>
            {data &&
                data.map(({id, name}) => {
                    return <AnimalItem id={id} name={name}/>
                })}
        </ul>
    )
}

export default ListOfAnimals;