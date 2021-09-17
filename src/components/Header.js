import Button from './Button'

const Header = ({title, onAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color = "green" text = "Add" onClick =
            {onAdd} />
            
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}
// CSS Styling 
// const styleHeading = {
//     color: 'white',
//     backgroundColor:"red"
// }

export default Header
