import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../db/TasksCollection';

//usando function ao invés de arrow function para ter contexto para usar o this
Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId })
})