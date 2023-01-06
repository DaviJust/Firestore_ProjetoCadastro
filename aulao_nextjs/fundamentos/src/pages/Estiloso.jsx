import Styles from "../pages/Estiloso.module.css"
import Layout from "../components/Layout"

export default function Estiloso(props) {
    return (
        <Layout>
        <div className={Styles.vermelho}>
            <h1>Estilo usando CSS modulos</h1>
        </div>
        </Layout>
    )
}