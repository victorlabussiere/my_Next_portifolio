import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setToasty from './ToastFactory'

export class MailController {
    constructor(mail) {
        this.mail = mail
    }

    _validation({ email, name, message }) {
        if (!name || !email || !message) throw new Error('incomplete')

        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email.trim())) throw new Error('invalid-mail')

        return void (0)
    }

    async sendForm({ ...obj }) {
        const loadingToastId = toast('Enviando', { ...setToasty('info', 'Enviando mensagem...'), position: 'bottom-center', autoClose: 900 })
        try {
            this._validation({ ...obj })

            const response = await axios.post(this.mail, { ...obj }, {
                onUploadProgress: (progress) => {
                    let setProgress = Math.round((progress.loaded * 100) / progress.total);
                    return toast.update(loadingToastId, {
                        ...setToasty('info', 'Enviando...'),
                        progress: setProgress
                    })
                }
            }).then(res => {

                if (res.status != 200) throw new Error('send-failed')
                else toast.update(loadingToastId, setToasty('success', 'Mensagem enviada!'))

                return res.data = { message: res.data, status: 200 }

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
            return { ...err }
        }
    }
}