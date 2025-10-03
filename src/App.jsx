
import Header from './Component/Header'
import Estilo from './Component/Style/Estilo.module.css'
function App() {


  return (
    <>
      <Header></Header>

      <main className={Estilo.Container}>
        <section className={`${Estilo.cardMainCard} ${Estilo.Card}`}>
          <h2 className={Estilo.CardHeader}>Descreva o background que você deseja</h2>

          <form className=''>
            <textarea id="description" placeholder="Ex: Um gradiente azul suave que vai azul claro ao azul escuro." rows="5" className={Estilo.formGroupTextArea}></textarea>

            <button id="generate-btn" className={Estilo.btnMagic}>
              <span id="btn-text" >Gerar Background Mágico</span>
            </button>
          </form>
        </section>

        <section id="preview-section" className="preview-card">

        </section>

        <section id="code-output" className={Estilo.codeGrid}>
          <div className={`${Estilo.Card}  ${Estilo.codeCard}`}>
            <h3 className={Estilo.codeTitle}>Código HTML</h3>

            <pre id="html-code" className={Estilo.codeBlock}></pre>
          </div>


          <div className={`${Estilo.Card} ${Estilo.codeCard}`} code-card>
            <h3 className={Estilo.codeTitle}>Código CSS</h3>

            <pre id="css-code" className={Estilo.codeBlock}></pre>
          </div>
        </section>
      </main>
      
    </>
  )
}

export default App
