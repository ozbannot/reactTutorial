import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const onClickButton = () => alert();
const App = () => {
  return (
    <>
      <h1 style={{ color: 'red' }}>かかっか</h1>
      <ColorfulMessage color='green' message='お元気' />
      <p>msgs</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

