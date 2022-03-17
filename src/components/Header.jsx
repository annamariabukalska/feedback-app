import PropTypes from 'prop-types'

function Header({text}){
    return (
        <header>
            <div className='container'>
            <h2>{props.text}</h2>
            </div>
        </header>
    )
}

export default Header

Header.propTypes = {
    text: PropTypes.string
}

Header.propsTypes = {}