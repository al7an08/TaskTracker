import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>{title}</header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
}


export default Header