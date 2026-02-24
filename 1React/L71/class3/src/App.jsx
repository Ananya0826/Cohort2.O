import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Button is Clicked!!!');
  }
  return (
    <div>
      <button onClick={function(){
        btnClicked()
      }}
       className='active:scale-95 bg-emerald-600 text-white rounded font-bold m-2 p-4'>Click to Download</button>
    </div>
  )
}
export default App
