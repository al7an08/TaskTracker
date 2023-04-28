import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, addShow }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={!addShow ? 'green' : 'red'} text={!addShow ? 'add' : 'close'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header