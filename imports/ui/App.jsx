import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/TasksCollection';
import { Task } from './Task';
import { TaskForm } from './TaskForm'

export const App = () => {
  
  const tasks = useTracker(() => TasksCollection.find({},{ sort: { createdAt: -1 } }).fetch());

  const toggleChecked=( {_id, isChecked } ) => {
    TasksCollection.update(_id,{
      $set: {
        isChecked: !isChecked,
      }
    })
  }

  const deletTask = ({ _id }) => TasksCollection.remove(_id)

  return(
    <div className='app'>
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>📝️ To Do List</h1>
          </div>
        </div>
      </header>

      <div className="main">
        <TaskForm />

        <ul className='tasks'>
          { tasks.map((task)=> <Task 
          key={ task._id } task={ task } 
          onCheckboxClick={toggleChecked} 
          onDeleteClick={deletTask}
          />) }
        </ul>
      </div>
    </div>
  )
};
