// import { Component } from "react";
// import "./Square.css";

// export class Square extends Component {
//   render() {
//     return (<button className="square" onClick={() => {
//       this.props.onClick();
//     }}>{this.props.value}</button>);
//   }
// }

import "./Square.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={() => onClick()}>{value}</button>
  );
}

export default Square;