import img from '../../public/flag.png'
export default function Footer() {
    return (
        <footer>
            <p>Desenvolvido por&nbsp;
                <a href="https://github.com/Nicolle-Dias" id="name_nicolle">Nicolle Dias
                <img id="trans_flag" src={img} width="30" height="20"></img>
                </a>
            </p>
        </footer>

    )
}