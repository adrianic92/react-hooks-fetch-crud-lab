import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({list, deleteItem, updateAnswer}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      {list? <ul>{list.map(item => {return (<QuestionItem updateAnswer={updateAnswer} deleteItem={deleteItem} key={item.id} question={item}/>)})}</ul> : <h2>Loading...</h2>}
    </section>
  );
}

export default QuestionList;
