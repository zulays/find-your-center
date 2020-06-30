import React, { Component } from "react"
import colors from "./data/colors.json"

function Background() {

  let [color, updateColor] = useState()

  for (let i = 0; i < colors.length) {
    return updateColor(color[2])
  }

  return (
    <div className="bg-option">
      <button className="bg-button">color</button>
    </div>
  )
}


export default Background


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
