import React from 'react';
import { initialMainReducerState, mainReducer } from '../../utils/MainReducer';

interface HooksTestProps {

}


export const HooksTest: React.FC<HooksTestProps> = () => {

  const [ state, dispatch ] = React.useReducer(mainReducer, initialMainReducerState);

  const [ count, setCount ] = React.useState(0);
  const handleChangeCount = () => setCount(count + 1);

  const [ other, setOther ] = React.useState(0);
  const handleChangeOther = () => setOther(other + 1);

  console.log('hola');


  const handleReducerIncrease = () => {
    dispatch({
      type: 'increment'
    })
  }

  const handleReducerEat = () => {
    dispatch({
      type: 'eat'
    })
  }

  const [ inputValue, setInputValue ] = React.useState('');
  const handleInputChange = (event: any) => setInputValue(event.target.value);

  const handleRename = (event: any) => {
    event.preventDefault();
    dispatch({
      type: 'rename',
      name: inputValue
    });
    setInputValue('');
  }

  React.useEffect(() => {
    console.log('una vez')
  }, [  ]);

  React.useEffect(() => {
    if(count <= 5) return;
    console.log('count es ', count);
  }, [ count ]);

  return <div>
    <h1>HooksTest</h1>
    <button onClick={handleChangeCount}>count {count}</button>
    <button onClick={handleChangeOther}>other {other}</button>

    <form onSubmit={handleRename}>
      <input value={inputValue} onChange={handleInputChange} />
    </form>

    <hr />

    <button onClick={handleReducerIncrease}>reducer count {state.count}</button>
    <button onClick={handleReducerEat}>eat</button>

    <pre> {JSON.stringify(state, null, 2)} </pre>
  </div>;
}