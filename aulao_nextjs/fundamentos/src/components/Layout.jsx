import Link from "next/link"
import Styles from "../styles/layout.module.css"

export default function Layout(props) {
    return (
        <div className={Styles.layout}>
            <div className={Styles.cabecalho}>
                <h1>{props.titulo ?? "mais um exemplo"}</h1>
                <Link legacyBehavior href="/">
                    <a>Voltar</a>
                    </Link>
            </div>
            <div className={Styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}
