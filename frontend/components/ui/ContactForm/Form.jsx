import { useState } from 'react'
import { MailController } from './MailController'

export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const mail = new MailController(process.env.MAIL_API, formData)
        const response = await mail.sendForm()
            .then(res => {
                if (res.status != 200) throw new Error()
                else setFormData({ name: '', email: '', message: '' })

                return res
            }).catch(err => console.error('Erro durante o envio do formulário', err))

        return response
    }

    return (
        <form>
            <h3 className='h3M'> Iniciar uma conversa</h3>

            <label htmlFor="nome"><p className='pL'>Nome</p>
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Digite seu nome aqui...' /></label>

            <label htmlFor="email"><p className='pL'>E-mail</p>
                <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Digite seu email aqui...' /></label>

            <label htmlFor="mensagem"> <p className='pL'>Mensagem</p>
                <textarea type="text" name='message' value={formData.message} onChange={handleChange} placeholder='Digite sua mensagem aqui...' /></label>

            <div
                role='button'
                className='h3S primaryButton'
                onClick={handleSubmit}
            >
                <i className='material-icons'>mail</i>
                Enviar mensagem
            </div>
        </form>
    )
}