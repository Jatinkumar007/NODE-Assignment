const Event = require('events');
const event = new Event();

const defaultMaxListeners = event.getMaxListeners();
console.log(`The default maximum number of event listners are: ${defaultMaxListeners}`);

event.setMaxListeners(5);

const updatedMaxListeners = event.getMaxListeners();
console.log(`The updated maximum number of event listners are: ${updatedMaxListeners}`);
