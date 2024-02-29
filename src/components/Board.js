// import { Component } from "react";
// import Square from "./Square";
// import "./Board.css";

// export class Board extends Component {
//   constructor() {
//     super();
//     this.state = {
//       values: new Array(9).fill(null)
//     };
//   }

//   onSquareClick(i) {
//     const temp = this.state.values.slice();
//     temp[i] = "X";
//     this.setState({values: temp});
//     // this.state.values[i] = "X";
//     // this.setState({values: this.state.values});

//     // const temp = this.state.values;
//     // console.log(temp == this.state.values);
//     // temp[i] = "X";
//     // console.log(temp == this.state.values);
//     // this.setState({values: temp});
//   }

//   drawSquare(i) {
//     return <Square value={this.state.values[i]} onClick={() => { this.onSquareClick(i); }} />;
//   }

//   render() {
//     return (
//       <div>
//         <div className="status">이번 차례 : X, O</div>
//         <div className="square-row">
//           {this.drawSquare(0)}
//           {this.drawSquare(1)}
//           {this.drawSquare(2)}
//         </div>
//         <div className="square-row">
//           {this.drawSquare(3)}
//           {this.drawSquare(4)}
//           {this.drawSquare(5)}
//         </div>
//         <div className="square-row">
//           {this.drawSquare(6)}
//           {this.drawSquare(7)}
//           {this.drawSquare(8)}
//         </div>
//       </div>);
//   }
// }

import Square from "./Square";
import "./Board.css";

const Board = ({current, onSquareClickCallback}) => {
  const drawSquare = (i) => {
    return <Square value={current[i]} onClick={() => { onSquareClickCallback(i); }} />;
  }

  return (
    <div>
      <div className="square-row">
        {drawSquare(0)}
        {drawSquare(1)}
        {drawSquare(2)}
      </div>
      <div className="square-row">
        {drawSquare(3)}
        {drawSquare(4)}
        {drawSquare(5)}
      </div>
      <div className="square-row">
        {drawSquare(6)}
        {drawSquare(7)}
        {drawSquare(8)}
      </div>
    </div>);
}

export default Board;