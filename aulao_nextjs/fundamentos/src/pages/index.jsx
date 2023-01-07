// export default function inicio()  {
//   //"<h1>Titulo</h1>" vai ler como string
//   return <h1>Titulo</h1>
// }
// import Estiloso from "./estiloso"
// export default function framework(){
//   return (
//     <div>
//       <link href="/Estiloso">
//       Estiloso
//       </link>
//     </div>
//   )
// }

import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexWrap:'wrap',
      height:'100vh'

    }}>
      <Navegador destino="/estiloso" texto="Estiloso " />
      <Navegador destino="/exemplo" texto="Exemplo " cor="purple"/>
      <Navegador destino="/jsx" texto="Jsx" cor="red"/>
      <Navegador destino="/navegacao" texto="Navegacao #01" cor="orange"/>
      <Navegador destino="/cliente/sp2/321" texto="Navegacao #02" cor="pink"/>
      <Navegador destino="/estado" texto="Componente com estado" cor="gray"/>

    </div>
  )
}