
import Header from './Component/Header'
import Estilo from './Component/Style/Estilo.module.css'
import Form from './Component/page/Form';



function App() {

 


  return (
    <>
      <div className={Estilo.AvisoEstilo} id='aviso'>
        <p>Mensagem</p>
      </div>

      <Header></Header>

      <main className={Estilo.Container}>
        <section className={`${Estilo.cardMainCard} ${Estilo.Card}`}>
          <h2 className={Estilo.CardHeader}>Descreva o background que você deseja</h2>

          {/* form fica aqui  */}
          <Form></Form>
        </section>

        <section id="preview-section" className="preview-card">

        </section>

        <section id="code-output" className={Estilo.codeGrid}>
          <div className={`${Estilo.Card}  ${Estilo.codeCard}`}>
            <h3 className={Estilo.codeTitle}>Código HTML</h3>

            <pre id="html-code" className={Estilo.codeBlock}></pre>
          </div>


          <div className={`${Estilo.Card} ${Estilo.codeCard}`} >
            <h3 className={Estilo.codeTitle}>Código CSS</h3>

            <pre id="css-code" className={Estilo.codeBlock}></pre>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
