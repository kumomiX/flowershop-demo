import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarBig from 'components/global/NavbarBig'
import NavbarMobile from 'components/global/NavbarMobile'

class Navbar extends Component {
  state = {
    scrolled: false
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.resize)
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  getWidth = () =>
    Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    )

  render() {
    const pageWidth = this.getWidth()
    return pageWidth <= 1000 ? (
      <NavbarMobile
        light={this.props.light}
        quantity={this.props.quantity}
        scrolled={this.state.scrolled}
      />
    ) : (
      <NavbarBig
        light={this.props.light}
        quantity={this.props.quantity}
        scrolled={this.state.scrolled}
      />
    )
  }
}

const mapStateToProps = state => {
  const cart = state.cart
  const quantity = cart.reduce((acc, item) => (acc += item.quantity), 0)
  return { quantity }
}

export default connect(mapStateToProps, null)(Navbar)
