// Import stylesheets
import './style.css';
import { Stack } from './Stack.js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS - Stack Implementation</h1><hr>`;

var stack = new Stack();
stack.push(10);
appDiv.innerHTML+= `Insert: 10, Size: ${stack.size()}<br>`;
stack.push(22);
appDiv.innerHTML+= `Insert: 22, Size: ${stack.size()}<br>`;
stack.push(13);
appDiv.innerHTML+= `Insert: 13, Size: ${stack.size()}<br>`;
stack.push(42);
appDiv.innerHTML+= `Insert: 42, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `<br>Peek: ${stack.peek()}, Size: ${stack.size()}<br><br>`;

stack.push(54);
appDiv.innerHTML+= `Insert: 54, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `<br>Peek: ${stack.peek()}, Size: ${stack.size()}<br><br>`;


appDiv.innerHTML+= `Pop: ${stack.pop()}, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `Pop: ${stack.pop()}, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `Pop: ${stack.pop()}, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `Pop: ${stack.pop()}, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `Pop: ${stack.pop()}, Size: ${stack.size()}<br>`;

appDiv.innerHTML+= `Pop: ${stack.pop()}, Size: ${stack.size()}<br>`;