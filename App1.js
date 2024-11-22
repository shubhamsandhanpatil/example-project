import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <img src="https://images.pexels.com/photos/2854273/pexels-photo-2854273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="awesome" 
      style={{width:'300px',height:'auto'}}/>
      <img src="https://hbkonline.in/media/catalog/product/cache/00b6bcf79880dda7e7f26e21db784c5d/a/p/apple_fruit_powder3.jpg" alt="A red apple on a wooden table"
      style={{width:'300px',height:'auto'}}/>
 
      <div className='blank'><b>lets go.....!</b></div>
      <MyButton />
      
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
