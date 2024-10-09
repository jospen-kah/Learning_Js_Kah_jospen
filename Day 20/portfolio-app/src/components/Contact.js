import React from 'react';

const Contact = () =>{
return ( 
    <div className='contact'>
        <h2>Contact Me</h2>
        <div className='contact-content'>
            <div className='name'>
                <input type='text' placeholder='Name' id='name'/>
                <input type='email' placeholder='Email' id='email' />
            </div>
            <div className='phone'>
                <input type='number' placeholder='Phone' id='phone' />
                <select>
                    <option>Web Applications</option>
                    <option>Mobile Application</option>
                    <option>Desktop Application</option>
                </select>
            </div>
            <div className='timeline'>
                <input type="text" placeholder='Timeline' id="timeline" />
                <textarea>Project Description</textarea>
            </div>
            <button>Send</button>
        </div>
    </div>
)
}

export default Contact