import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToasty } from './ToastFactory'

export class MailController {
    constructor(mail) {
        this.mail = mail
    }


    _validaEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email)
    }

    async sendForm({ name, email, message }) {
        const loadingToastId = toast('Enviando', { ...setToasty('info', 'Enviando mensagem...'), position: 'bottom-center', autoClose: 900 })

        try {
            if (!name || !email || !message) throw new Error('incomplete')

            const validEmail = this._validaEmail(email.trim())
            if (!validEmail) throw new Error('invalid-mail')

            let setProgress = 0
            const response = await axios.post(this.mail, { name, email, message }, {
                onUploadProgress: (progress) => {

                    const percent = Math.round((progress.loaded * 100) / progress.total);
                    setProgress = percent
                    return toast.update(loadingToastId, {
                        ...setToasty('info', 'Enviando...'),
                        progress: percent
                    })

                }
            }).then(res => {
                if (res.status != 200) throw new Error('send-failed')
                if (res.status === 200) toast.update(loadingToastId, setToasty('sucess', 'Mensagem enviada!'))

                return res.data = {
                    message: res.data,
                    status: 200
                }
            }).catch((err) => {
                console.log('erro', err)
                throw new Error(err.message)
            })

            return response

        } catch (err) {
            switch (err.message) {
                case 'incomplete':
                    toast.update(loadingToastId, setToasty('error', 'Preencha todos os campos para prosseguir.'))
                    return { ...err }
                case 'invalid-mail':
                    toast.update(loadingToastId, setToasty('error', 'Verifique se o seu e-mail está digitado corretamente.'))
                    return { ...err }
                case 'send-failed':
                    toast.update(loadingToastId, setToasty('error', 'Erro durante o envio da mensagem.'))
                    return { ...err }
                default:
                    toast.update(loadingToastId, setToasty('error', 'Erro de envio. Tenta novamente mais tarde'))
                    break;
            }
            return { message: err.mesasge, error: err }
        }
    }
}