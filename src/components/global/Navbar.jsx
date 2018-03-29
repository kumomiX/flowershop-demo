import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from 'assets/logo/logo1.svg'

class Navbar extends Component {
  state = {
    scrolled: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    return (
      <nav>
        <div
          className={
            'nav-container' +
            (this.props.light ? ' light ' : ' ') +
            (this.state.scrolled ? ' scrolled' : ' ')
          }
        >
          <nav className="primary-nav">
            <Link to="/products">Products</Link>
            <Link to="/options">Options</Link>
          </nav>

          <Link to="/">
            <img
              src={this.props.light ? logo : logo}
              alt="flowershop"
              className="logo"
            />
          </Link>

          <nav className="secondary-nav">
            <Link to="/cart">Cart ({this.props.quantity})</Link>
          </nav>
        </div>
        {/* {this.state.scrolled && (
          <button className="scroll-btn" onClick={e => window.scrollTo(0, 0)} />
        )} */}
      </nav>
    )
  }
}

const mapStateToProps = state => {
  const cart = state.cart
  const quantity = cart.reduce((acc, item) => (acc += item.quantity), 0)
  return { quantity }
}

export default connect(mapStateToProps, null)(Navbar)
