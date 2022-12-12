import React from 'react'
import Button from './Components/Button';
import {GoBell,GoCloudUpload,GoDatabase} from 'react-icons/go'

function App() {
    const handleClick = () => {
        console.log('button clicked')
    }
  return (
    <div>
        <div>
            <Button primary  onClick={handleClick}>
                Click Me..!
                <GoBell />
            </Button>
        </div>
        <div>
            <Button secondary rounded className='mb-5' onMouseEnter={handleClick}>
                Click Me..!
                <GoCloudUpload />
                </Button>
        </div>
        <div>
            <Button success={true} rounded outline onMouseLeave={handleClick}>Click Me..!<GoDatabase /></Button>
        </div>
        <div>
            <Button warning>Click Me..!</Button>
        </div>
        <div>
            <Button danger outline>Click Me..!</Button>
        </div> 
        
    </div>
  )
}

export default App