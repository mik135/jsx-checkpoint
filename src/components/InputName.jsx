/* eslint-disable react/prop-types */

function InputName({handleChange}) {
  return (
    <div>
        <h3>Enter Your Name to see your Products</h3>
        <input type="text" onChange={handleChange} className="nameInput"/>
    </div>
  )
}

export default InputName