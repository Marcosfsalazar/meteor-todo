import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/api/TasksCollection'

const insertTask = taskText => TasksCollection.insert({ text: taskText })

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (TasksCollection.find().count() === 0) {
    [
      
    ].forEach(insertTask)
  }
});
