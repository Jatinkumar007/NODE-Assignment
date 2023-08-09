const Event = require('events');
const event = new Event();

event.on('subscribe', () => {
  console.log('Thanks for Subscribing to College Wallah');
});

function subscribeUser() {
   
    event.emit('subscribe',"College Wallah");
  }
  
  subscribeUser();
  