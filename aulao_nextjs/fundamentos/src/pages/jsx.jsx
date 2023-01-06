import { getRandomValues } from "crypto"

export default function Jsx(){
    const a = 3
    const b = 4
    console.log(a * b)
    const titulo = <h1>Bem vindo(a,e,i,o,u,z,s) ao modulo de React.js & Next.js</h1>
    return <div>
        {titulo}
        <h1>{a * b}</h1>
        <h2>{"muito legal".toUpperCase()}</h2>
        {/* {Math.random()} */}
        <p>
            {JSON.stringify({nome: 'joao', idade:44})}
        </p>
    </div>
}