const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define the event handler
const eventHandler = () => {
  console.log('Event handler has been triggered!');
};

// Add the event handler to the "myEvent" event
eventEmitter.on('myEvent', eventHandler);

// Emit the "myEvent" event
eventEmitter.emit('myEvent'); // This will trigger the event handler

// Remove the event handler from the "myEvent" event
eventEmitter.removeListener('myEvent', eventHandler);

// Emit the "myEvent" event again
eventEmitter.emit('myEvent'); // This will not trigger the event handler anymore
