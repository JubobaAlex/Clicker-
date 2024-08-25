import React from 'react';
import './App.css';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const store = observable({
  count: 0,
  increment() {
    this.count++;
    if (this.count === 10) {
      console.log('10');
    }
  }
}
);
const App = observer(() => (
  <div>
    <div className='MainDiv'>
    <h1>Всего кликов: {store.count}</h1>
    </div>
    <div className='clickButtonDiv'>
    <button className='clickButton' onClick={() => store.increment()}>ТАП</button>
    </div>
  </div>
));

export default App;