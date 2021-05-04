
function Header(curso) {
  return(
    <div>
       <h1>{curso.nome}</h1>
    </div>
  )
}

function Content(conteudo) {
  return(
    <div>
       <p>Conteudo parte 1:{conteudo.part1}</p>
       <p>Conteudo parte 2:{conteudo.part2}</p>
       <p>Conteudo parte 3:{conteudo.part3}</p>
    </div>
  )
}

function Total(exercicios) {
  return(
    <div>
       <p>Total: {exercicios.exer1 + exercicios.exer2 + exercicios.exer3}</p>
    </div>
  )
}

function App() {
  console.log('Ola do componente')
  const nome = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const part2 = "Using propos to pass data"
  const part3 = "State of a component"
  const exer1 = 10
  const exer2 = 7
  const exer3 = 14
  
  return (
    <div className="App">
      <Header nome={nome}/>
      <Content part1={part1} part2={part2} part3={part3}/> 
      <Total exer1={exer1} exer2={exer2} exer3={exer3} />
    </div>
  )
}

export default App;
