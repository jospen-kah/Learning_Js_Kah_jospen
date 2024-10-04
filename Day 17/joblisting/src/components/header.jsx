import React from 'react'
import close from './images/icon-remove.svg'

const Header = ({keywords, removeKeywords, clearAll }) => {
  return( 
  <div className="header-container">
    <ul>
    {keywords.map( (key, id) => {
        return <li key={id}>
          <button className="close" onClick={ () => removeKeywords(key)}>{key}
          <img src={close} alt="" />
          </button>
          </li>
      })
}
<a href="#" onClick={ () => clearAll()}>
  Clear
</a>
    </ul>
</div>
)};
export default Header;