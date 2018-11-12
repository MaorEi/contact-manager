import React, { Component } from 'react'
import PropTypes from 'prop-types'

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <h4>
//             Contact Manager
//         </h4>
//       </div>
//     )
//   }
// }

// function Header() {

//     return(<h4>Contact Manager</h4>);}
  
const Header = (props) => {
  const {branding} = props;
  return(<h4>{branding}</h4>);
}

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}

Header.defaultProps = {
  branding: "This is a default branding prop!"
}

export default Header;