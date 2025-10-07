import Style from './Style/Estilo.module.css'



const header = () => {
  return (
    <header className={Style.header}>
      <h1>Fundo Mágico</h1>

      <p className={Style.headerSubtitle}>Transforme suas ideias em backgrounds incríveis com o poder da IA. Descreva o que você imagina e veja a magia acontecer.</p>
    </header>
  )
}

export default header