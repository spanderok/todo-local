import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { App } from './App';



import './style.css';

// class AppState {
//   @observable timer = 0;
//
//   constructor() {
//     setInterval(() => {
//       this.timer += 1;
//     }, 1000);
//   }
//
//   @action
//   resetTimer() {
//     this.timer = 0;
//   }
// }
//
// const Timer = observer(() => {
//   const service = React.useMemo(() => new AppState(), []);
//
//   return (
//     <div>
//       <button
//         onClick={() => service.resetTimer()}
//         className={service.timer % 2 === 0 ? 'complete' : ''}
//       >
//         Seconds passed: {service.timer}
//       </button>
//     </div>
//   );
// });

ReactDOM.render(<App />, document.getElementById('root'));
