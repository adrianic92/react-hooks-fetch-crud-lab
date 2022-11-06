import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [list, setList] = useState(null)

  useEffect( () => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setList(data))
  }, [])

  function postQuestion(obj) {
    setList([...list, obj])
  }

  function deleteItem(question) {
    const newList = list.filter(item => question.id !== item.id)
    setList(newList)
  }

  function updateAnswer(id, index) {
    const newList = list.map( item => {
      if (item.id === id) { return {...item, correctIndex: index}}
      else {return item}
    })
    setList(newList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm postQuestion={postQuestion} /> : <QuestionList updateAnswer={updateAnswer} deleteItem={deleteItem} list={list} />}
    </main>
  );
}

export default App;
