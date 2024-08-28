// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLogin: false}

  loginbtn = () => {
    const {isLogin} = this.state

    this.setState(prevState => ({
      isLogin : !prevState.isLogin
    }))
  }

  chooseButton = () => {
    const {isLogin} = this.state

    if (isLogin === true) {
      return (
        <button
          className="subscribed-btn"
          type="button"
          onClick={this.loginbtn}
        >
          subscribed
        </button>
      )
    }
    return (
      <button className="subscribe-btn" type="button" onClick={this.loginbtn}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="headingEl">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div className="button-con">{this.chooseButton()}</div>
      </div>
    )
  }
}

export default Welcome
