import Message from './comps/message';
import './App.css';
import Counter from './comps/counter';
import InputVal from './comps/inputVal';

function App() {
  return (
    <div className="container">
      <h1 className='text-danger'>React</h1>
      {/* חיבור בין קומפנינטה
      פשוט זימון שלה ממש כמו תגית יחידה */}
      {/* <Message txt="first 111111" /> */}
      {/* 
      let msg1 = new Message("first 1111")
      msg1.render()
      */}
      {/* <Message txt="last 22222"  /> */}
      <Counter />
      <InputVal />
    </div>
  );
}

export default App;
