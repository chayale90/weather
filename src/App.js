import Message from './comps/message';
import './App.css';
import Counter from './comps/counter';
import Alert from './comps/alert';
import InputVal from './comps/inputVal';

function App() {
  return (
    <div className="container">
      <h1 className='text-danger'>React</h1>
      {/* חיבור בין קומפנינטה
      פשוט זימון שלה ממש כמו תגית יחידה */}
      {/* <Message txt="first 111111" /> */}
      {/* <Message txt="last 22222" /> */}
      {/* <Alert txt="last 33333" bg="grey" /> */}
      <Counter />
      <InputVal/>
    </div>
  );
}

export default App;
