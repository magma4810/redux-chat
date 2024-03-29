import { createCounter } from './createCounter';
import { store1,store2 } from './store'
 
const container = document.createElement('div');
document.body.append(container);
createCounter(container,store1);

const container1 = document.createElement('div');
document.body.append(container1);
createCounter(container1,store2);