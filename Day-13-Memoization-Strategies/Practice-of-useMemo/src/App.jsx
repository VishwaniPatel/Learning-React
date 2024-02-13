import { useState } from "react";
import TodoList from "./WorkingWithuseMemo/TodoList";
import { createTodos } from './WorkingWithuseMemo/ToDoUtils'
import TodoListWithoutMemo from "./WorkingWithoutMemo/ToDoListWithoutMemo";
import { WithMemo } from "./WithMemo";
import WithoutMemo from "./WithoutMemo";
import { CalFacWithoutMemo } from "./CalFacWithoutMemo";
import { CalFacWithMemo } from "./CalFacWithMemo";

function App() {
  return (
    <>
      <WithoutMemo />
      {/* <WithMemo/> */}
      {/* <CalFacWithoutMemo/> */}
      {/* <CalFacWithMemo/> */}
    </>
  )

}

export default App
