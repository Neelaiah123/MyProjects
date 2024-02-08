import React, { useState } from "react";
// const user = {
//     firstname: "Rusum",
//     secondname: "naidu"
// }

// function calling(user) {
//     return user.firstname + " " + user.secondname;
// }

// function App() {
//     return <div> <Result />

//     </div>

// };

// return React.createElement("h1", { className: "Heading" }, "Hello World");
// return React.createElement("div",
//     { className: "first" },
//     React.createElement("h1", {
//         className: "second"
//     }, "hello World"));

// return <div>
//     <h1>Neelaiah{calling(user)}</h1>
//     <label>Username :</label>
//     <input type="text" name="UserName" id="Username"></input><br></br><br></br>
//     <label>PassWord:</label>
//     <input type="password" name="Password" id="Password"></input>
//     <img src="C:\Users\Neelaiah Rusum\Desktop\reactjs\my-app\src\WhatsApp Image 2022-07-23 at 9.01.10 PM.jpeg" alt="Bujji"></img>
// </div>
// return <section>
//     <h1> time {new Date().toLocaleTimeString()}</h1>
// </section>

// function Result() {
//     return <article className="movie-style">
//         <Immpant />
//         <Title />
//     </article>
// };

// function Immpant() {
//     return <img src="myimage.jpeg" alt="googlepic" id="result" />
// };

// function Title() {

//     return <div><h1 id="text">MY PHOTOS
//         <span >Samll Size {10 + 20}</span>

//     </h1>
//     <p>lorem20</p>
//     </div>
// };

// function App() {
//     const [count, setCount] = useState(0);
//     function incrementcount() {

//         setCount(count + 1);

//     };
//     function decrementcount() {

//         setCount(count - 1 && count === 0);

//     };

//     return (<div>
//         <button onClick={decrementcount}>-</button>
//         <span>{count}</span>
//         <button onClick={incrementcount}>+</button>
//     </div>);
// };


function App() {
    const intsilarray = [
        {
            id: '1',
            firstname: 'neelaiah',
            lastname: 'rusum',
            age: 23,
        },
        {
            id: '2',
            firstname: 'vinod',
            lastname: 'kotha',
            age: 26,
        },

    ];
    const [data, setdata] = useState(intsilarray);

    function deletefunction(comingId) {
        const filterData = data.filter((eachItem) => {
            return eachItem.id !== comingId;
        });
        setdata(filterData);
    };
    return (
        <div>
            <ul>
                {
                    data.map((eachItem, index) => {     
                        const { firstname, lastname, age, id } = eachItem;
                        return (
                            <li key={index}>
                                <div>Id:{id}</div>
                                <div>firstname:<strong>{firstname}</strong></div>
                                <div>lastname:<strong>{lastname}</strong></div>
                                <div>age:{age}</div>
                                <button onClick={() => deletefunction(id)}>Delete Me</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
export default App;