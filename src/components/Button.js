import PropTypes from 'prop-types'

const Button = (props) => {
    const onClick = (e) => {
        console.log(e)
    }
    
    return (
        <button onClick = {onClick} style = {{backgroundColor : props.color}}className='btn'>{props.text}</button>
    )
}



Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {

    text: PropTypes.string,
    color: PropTypes.string,
}


export default Button
