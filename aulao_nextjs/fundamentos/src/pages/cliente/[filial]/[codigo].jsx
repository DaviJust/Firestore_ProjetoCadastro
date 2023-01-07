import Layout from "../../../components/Layout"
import router, { useRouter } from 'next/router'
// import { useEffect } from "react"

export default function ClienteProCodigo(){
    const router = useRouter()
    // console.log(router.query)
    // useEffect(() => {
    //     console.log(router.query.codigo)
    // }, [])
    return(
        <Layout titulo="Navegacao Dinamica">
        <span> Codigo = {router.query.codigo} </span>
        <hr/><span> Filial = {router.query.filial} </span>
        </Layout>
    )
}