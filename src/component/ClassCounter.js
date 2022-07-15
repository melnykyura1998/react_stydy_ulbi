// import React from "react";
//
// export class ClassCounter extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             likes: 0,
//             value:'empty'
//         }
//         this.increment=this.increment.bind(this)
//         this.decrement=this.decrement.bind(this)
//         this.onChange=this.onChange.bind(this)
//         }
//         increment(){
//             this.setState({likes:this.state.likes+1})
//         }
//         decrement(){
//             this.setState({likes:this.state.likes-1})
//         }
//         onChange(){event => this.setState(event.target.value)}
//         render() {
//         return(
//             <div>
//                 <h3>{this.state.likes}</h3>
//                 <h3>{this.state.value}</h3>
//                 <input type="text" value={this.value} placeholder={'write the text'} onChange={this.onChange}/>
//                 <button onClick={this.increment}>icrement</button>
//                 <button onClick={this.decrement}>decrement</button>
//
//             </div>
//         )
//         }
// }
