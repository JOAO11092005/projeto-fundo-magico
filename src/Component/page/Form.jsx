import { useState } from 'react'
import Estilo from '../Style/Estilo.module.css'


const form = () => {
   
    const [textoDigitando, Digitado] = useState(String)
    const aviso = document.getElementById('aviso')
    const htmlCode = document.getElementById('html-code')
    const cssCode = document.getElementById('css-code')
    let styleTag = document.getElementById("dynamic-style")
    const preview = document.getElementById("preview-section")
    const enviar = async (event) => {
        event.preventDefault()
        console.log('Pedido Enviado')
        try {
            const response = await fetch('https://joaopauloneves.app.n8n.cloud/webhook/devwebfullstack', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ textoDigitando })
            });

            const data = await response.json()
            const outputString = data[0].output;
            // 2. Limpa a string (remove ```json e ```)
            const cleanedString = outputString.replace(/^```json\n|```$/g, '');
            // 3. Converte a string limpa para um objeto
            const finalJson = JSON.parse(cleanedString);


            htmlCode.innerText = finalJson.code;
            cssCode.textContent = finalJson.style;
            avisoNoSite("Codigo Gerado", '#6bbd1aff')

            if(finalJson.style){
                styleTag = document.createElement('style')
            
                styleTag.id = 'dynamic-style'
                styleTag.innerText = finalJson.style
                document.head.appendChild(styleTag)
                preview.style.display = "block"
                preview.innerHTML = finalJson.preview
                document.body.style.background = ""
            }
        } catch (e) {
            console.log(`Erro no código: ${e}`, 'red')

            avisoNoSite(`Erro no Sistema: ${e}`)

        } finally {
            setLoading(false)
        }


    }
    function avisoNoSite(valor, corDeFundo) {
        aviso.innerText = valor
        aviso.style.display = "flex"
        aviso.style.backgroundColor = corDeFundo
        setTimeout(() => {
            aviso.style.display = 'none'
        }, 3000)

    }
    const setLoading = (isLoading) => {
        let btn = document.getElementById('btn-text');
        if (isLoading) {

            btn.innerHTML = `<img style="width: 10%;
    height: 30px;" src="https://i.pinimg.com/originals/e2/63/00/e26300c0c746d3163a0f48223c897cee.gif"  alt="Loading" />`

        } else {
            btn.innerText = "Gerar Background Mágico"
        }
        // console.log(isLoading)
    }



    if (!Digitado) {
        return
    }



    return (
        <>

            <form className='form-group' id='form-group' onSubmit={enviar}>
                <textarea id="description" placeholder="Ex: Um gradiente azul suave que vai azul claro ao azul escuro." rows="5" className={Estilo.formGroupTextArea} onChange={(e) => Digitado(e.target.value)}></textarea>

                <button id="generate-btn" className={Estilo.btnMagic} onClick={() => setLoading(true)}>
                    <span id="btn-text" className={Estilo.btnText} >Gerar Background Mágico</span>
                </button>
            </form>

        </>
    )
}



export default form