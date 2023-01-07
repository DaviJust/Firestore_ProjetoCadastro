import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado(){
    const [numero, setNumero] = useState(0) // React Hooks

    function incrementar(){
        setNumero( numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
        <span>
            {numero}
            <button onClick={incrementar} style={{
                background:"pink",
                color:"black",
            }}>Incrementar</button>
        </span>
        </Layout>
    )
}