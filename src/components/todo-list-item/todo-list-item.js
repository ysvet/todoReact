import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

///!!!!!!!!!*****WE don't need the state any more, it's just an axample of it:

//the STATE can be initialised with constructor:
  // constructor() {
  //   super();
  //   this.state ={
  //     done: false
  //   };
  // };

// or it can be initialised with CLASS FIELDS (PROPOSAL)
  // state = {
  //   done: false,
  //   important: false
  // };

/// Can be done like this:
 // constructor () {
 //   super();
 //
 //   this.onLabelClick = () => {
 //        console.log(`Done: ${this.props.label}`);
 //   };
 // };

 //.. or with CLASS FIELDS (PROPOSAL)

  render() {
   const { label, onDeleted,
           onToggleImportant,
           onToggleDone,
           important, done } = this.props;

   let classNames = 'todo-list-item';
   if (done) {
     classNames += ' done';
   };

if (important) {
  classNames += ' important';
};

    return (
      <span className= {classNames}>
        <span
          className="todo-list-item-label"
          onClick= {onToggleDone}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right" onClick = {onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick = {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
};
