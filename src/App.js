import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [firstName, setfirstName] = useState("")
//   const [lastName, setlastName] = useState("")
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setrepeatpassword] = useState ("")



//   function handlefirstNameChange(e) {
//     setfirstName(e.target.value);
//   }

//     function handlelastNameChange(e) {
//       setlastName(e.target.value);
//     }

//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//   }

//   function handlePasswordChange(e) {
//     setPassword(e.target.value);
//   }

//   function handlerepeatPasswordChange(e) {
//     setrepeatpassword(e.target.value);}



//   function handleSubmit(e) {
//     e.preventDefault();
//     setEmail("");
//     setPassword("");

//     //(email, password)
//   }

//   return (
//     <form onSubmit={(e) => handleSubmit(e)}>

//       <input name="fristName"
//       type="name" 
//       value={firstName}
//       onChange={(e)=> handlefirstNameChange(e)}
//       />

//       <input name="lastName"
//       type="name" 
//       value={lastName}
//       onChange={(e)=> handlelastNameChange(e)}
//       />
     
//       <input
//         name="email"
//         type="email"
//         value={email}
//         onChange={(e) => handleEmailChange(e)}
//       />
//       <input
//         name="password"
//         type="password"
//         value={password}
//         onChange={(e) => handlePasswordChange(e)}
//       />

//       <input name="repeatPassword"
//       type="password" 
//       value={repeatPassword}
//       onChange={(e)=> handlerepeatPasswordChange(e)}
//       />    
//       <input type="submit" />
//     </form>
//   );
// }

class App extends React.Component {

  constructor() {
    super();
    this.state = { firstName: "", lastName: "", email: "", password: "", repeatPassword: ""};
  }


  handlefirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }

  handlelasttNameChange(event) {
    this.setState({lastName: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handlerepeatPasswordChange(event) {
    this.setState({repeatPassword: event.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    //sign in user
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        
        <input
          name="firstName"
          type="name"
          value={this.state.firstName}
          onChange={(event) => this.handlefirstNameChange(event)}
        />

        <input
          name="lastName"
          type="name"
          value={this.state.lastName}
          onChange={(event) => this.handlelastNameChange(event)}
        />

        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={(event) => this.handleEmailChange(event)}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={(e) => this.handlePasswordChange(e)}
        />

        <input
          name="repeatPassword"
          type="password"
          value={this.state.repeatPassword}
          onChange={(event) => this.handlerepeatPasswordChange(event)}
        />

        <input type="submit" />
      </form>
    );
  }
}

export default App;
