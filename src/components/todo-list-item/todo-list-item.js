import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

//the STATE can be initialised with constructor:
  // constructor() {
  //   super();
  //   this.state ={
  //     done: false
  //   };
  // };

// or it can be initialised with CLASS FIELDS (PROPOSAL)
  state = {
    done: false,
    important: false
  };

/// Can be done like this:
 // constructor () {
 //   super();
 //
 //   this.onLabelClick = () => {
 //        console.log(`Done: ${this.props.label}`);
 //   };
 // };

 //.. or with CLASS FIELDS (PROPOSAL)
 onLabelClick = () => {
      this.setState(({done}) => {  // or without destructuring this.setState((state)
        return {
          done: !done // or without destructuring done: !state.done
        };
      });
 };

 onMarkImportant = () => {
   this.setState(({important}) => {
     return {
       important: !important
     };
   });
 };

  render() {
   const { label, onDeleted } = this.props;
   const {done, important} = this.state;

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
          onClick= {this.onLabelClick}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right" onClick = {this.onMarkImportant}>
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
