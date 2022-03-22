import React from 'react'
import {PropTypes} from 'prop-types'

const Profile = ({fullName ,age ,bio, children, handleClick}) => {
  return (
    <div style={{display:'flex' ,flexDirection:'column' , marginLeft:'auto',marginRight:'auto'}}>
        <h1 style={{textSize:'70',color:'#094679' , fontFamily:'Cursive,serif'}}> Hi, it's me !</h1>
        <span style={{textSize:'100px',color:'#094679' , fontFamily:'Cursive,serif'}}>  {fullName}</span>
        <span style={{textSize:'100px',color:'#094679' , fontFamily:'Cursive,serif'}}>  {age}ans </span>
        <span style={{textSize:'100px',color:'#094679' , fontFamily:'Cursive,serif'}}> {bio}</span>
        {children }
        <button style={{width:'100px',height:'40px', backgroundColor:'#094679',marginLeft:'300px'}} onClick={handleClick}>Click Me !!> </button>
    </div>
  )
}
Profile.defaultProps = {
  address: "Bou Salem"
}

Profile.propTypes={
  age : PropTypes.number
}

export default Profile