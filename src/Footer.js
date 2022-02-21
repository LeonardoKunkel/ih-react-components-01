
function Footer (props) {

    console.log(props)

    return(
        <footer>
            <p>Hola {props.apellido} .</p>
            <p>Este es el footer.</p>
        </footer>
    )
}

export default Footer
