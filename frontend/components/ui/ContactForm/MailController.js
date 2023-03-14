import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastFactory from '../../../lib/ToastFactory'

export class MailController {
    constructor(mail) {
        this.mail = mail
        this.toastyConfig = new ToastFactory
        this.setToasty = (type, render) => this.toastyConfig.getFormToasty(type, render)
    }

    _validation({ email, name, message }) {
        if (!name || !email || !message) throw new Error('incomplete')

        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email.trim())) throw new Error('invalid-mail')

        return void (0)
    }


    async sendForm({ ...obj }) {
        const loadingToastId = toast('Enviando', { ...this.setToasty('info', 'Enviando mensagem...'), position: 'bottom-center', autoClose: 900 })
        try {
            this._validation({ ...obj })

            const response = await axios.post(this.mail, { ...obj }, {
                onUploadProgress: (progress) => {
                    let setProgress = Math.round((progress.loaded * 100) / progress.total);
                    return toast.update(loadingToastId, { ...this.setToasty('info', 'Enviando...'), progress: setProgress })
                }
            }).then(res => {

                res.status != 200 ? new Error('send-failed')
                    : toast.update(loadingToastId, this.setToasty('success', 'Mensagem enviada!'))

                return res.data = { message: res.data, status: 200 }

            }).catch((err) => {
                console.log('erro', err)
                throw new Error(err.message)
            })

            return response

        } catch (err) {
            return this._errorHandler(err.message, loadingToastId)
        }
    }

    _errorHandler(str, toastObj) {
        switch (str) {
            case 'incomplete':
                return toast.update(toastObj, this.setToasty('error', 'Preencha todos os campos para prosseguir.'))
            case 'invalid-mail':
                return toast.update(toastObj, this.setToasty('error', 'Verifique o seu e-mail.'))
            case 'send-failed':
                return toast.update(toastObj, this.setToasty('error', 'Falha durante o envio da mensagem.'))
            default:
                toast.update(toastObj, this.setToasty('error', 'Erro de envio. Tenta novamente mais tarde'))
                break
        }
    }
}