import { useState } from 'react'
import { MailController } from './MailController'

export default function Form() {

    const mailControl = new MailController(process.env.MAIL_API)
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

    async function handleSubmit(obj) {

        const response = await mailControl.sendForm({ ...obj })
            .then(res => {
                return res.status != 200
                    ? new Error()
                    : setFormData({ name: '', email: '', message: '' })
            })
            .catch(err => {
                console.error('Erro', err)
            })

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
                onClick={() => handleSubmit({ ...formData })}
            >
                <i className='material-icons'>mail</i>
                Enviar mensagem
            </div>
        </form>
    )
}