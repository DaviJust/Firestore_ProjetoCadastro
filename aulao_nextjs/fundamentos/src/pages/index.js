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

    }}>
      <Navegador destino="/estiloso" texto="estiloso " />
      <Navegador destino="/exemplo" texto="exemplo "/>
      <Navegador destino="/jsx" texto="jsx "/>
    </div>
  )
}