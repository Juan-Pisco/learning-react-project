// Events in vanilla JS
// const button = document.querySelector('button');
// button.addEventListener('click', (event) => {
//     console.log(event);
// })

function Events() {
    return <button onClick={(event) => {console.log(event)}}>Click me</button>
}

export default Events;