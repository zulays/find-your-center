import React, { Component } from "react"


function Background() {

  // let [color, updateColor] = useState()



  return (
    <div className="bg-option">
      <button className="bg-button">color</button>
    </div>
  )
}


export default Background


// state control the background
// setTimeout
// loop through the data


// const todoList = [{ title: 'item 1', isDone: false }, { title: 'item 2', isDone: true }]

// function TodoItem({ title, isDone }) {
//   return (
//     <div>
//       <p style={{ color: isDone? 'green': 'red' }}>{title}</p>
//     </div>
// )
//  }

// function Todo(props) {
//   const todoList = props.todoList.map(el => <TodoItem key={el.id} title={el.title} isDone={el.isDone} />)
//   return <div>{todoList}</div>
// }
