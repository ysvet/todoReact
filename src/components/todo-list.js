import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

 const elements = todos.map((item) => {
   return (
     <li>
        <TodoListItem { ...item } />
          {/* label = {item.label}  //// change to object spread {...item}
          important = {item.important} />  */}
     </li>
   );
 });

  return (
   <ul>
     { elements }
   </ul>
  );
};

export default TodoList;
