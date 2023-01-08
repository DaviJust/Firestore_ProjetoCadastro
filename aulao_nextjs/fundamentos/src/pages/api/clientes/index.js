export default function handler(req,res){
  if(req.method === "GET"){
    handlerGET(req,res)
  } else{
    res.status(405).send()
  }

}

function handlerGET(req, res){
  res.status(200).json({
    id: 3,
    name: 'Teste API',
    metodo: req.method,
    idade:33,
    nome: req.query.nome,
    idades: req.query.id,
  })
}