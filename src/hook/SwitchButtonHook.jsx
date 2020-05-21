import React, { useState } from "react";

// ทวนนนะคร้าบพี่น้องงค้าบบบบบ
// const [thor, captian] = ['Thor', 'Captian America']
// console.log(thor)
// console.log(captian)

function SwitchButton() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <button
      style={{
        backgroundColor: isOn ? "red" : "green",
        color: "white",
        padding: "10px",
        borderRadius: "10px"
      }}
      onClick={handleClick}
    >
      TURN {isOn ? "OFF" : "ON"}
    </button>
  );
}

// class SwitchButton extends React.Component {
//   state = {
//     isOn: false,
//   }

//   handleClick = () => {
//     this.setState({
//       isOn: !this.state.isOn,
//     })
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         TURN {this.state.isOn === true ? 'OFF' : 'ON'}
//       </button>
//     )
//   }
// }

export default function() {
  return <SwitchButton />;
}
