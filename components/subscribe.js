import { useState } from "react";

export default function Subscribe({}) {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit () {
        setInput('');
        setMessage('Thank You');
        setTimeout(()=> {
            setMessage('')
        },5000)
    }
  return <div className="subscription">
      <div className='subscription-text'>
          <h2 className='head'>Subscribe to the Newsletter</h2>
          <p className='body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
           </p>
          </div>
              <div className='subscription-bar'>
                  <input type="email" className="input" placeholder='Email Address' value={input} onChange={(e)=>{console.log(e.target.value);setInput(e.target.value)}}/>
                  <button className="button" onClick={handleSubmit}>Subscribe</button>
              </div>
              <div className='subscription-mesage'>
                  {message}
                  </div>
  </div>;
}
