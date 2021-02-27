import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../imports/api/TasksCollection'

const insertTask = (taskText, user) => 
  TasksCollection.insert({ 
    text: taskText,
    userId: user._id,
    createdAt: new Date(), 
  })

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if(!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  // If the Links collection is empty, add some data.
  if (TasksCollection.find().count() === 0) {
    [
      'First Task, do a React Pokedex',
      'Second Task'
    ].forEach(taskText => insertTask(taskText,user));
  }

});
