export default function RepositoryList() {

  const repositoryName = 'unform'

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">
            Acessar Repositório
          </a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">
            Acessar Repositório
          </a>
        </li>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">
            Acessar Repositório
          </a>
        </li>
      </ul>
    </section>
  )
}