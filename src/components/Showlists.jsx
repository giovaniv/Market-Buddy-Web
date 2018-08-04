import React from 'react';

const ShowLists = (props) => {
    let lists = props.test.map((item) => {
        return (
          <li>
            {item}
          </li>
        )
      })
      
    return (
        <div>
            <h1 >I will show all the lists the user has </h1>
            <ul>
                {lists}
            </ul>
            <p> incoming data </p>
            
            <p> {JSON.parse(localStorage.listObj).title } </p>
        </div>
    );
}
export default ShowLists;