import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToastFactory = require('./ToastFactory')

export class MailController {
    constructor(mail, objForm) {
        this.mail = mail
        this.obj = { ...objForm }
    }

    async sendForm() {
        const toastyFactory = new ToastFactory()

        const sucessMessage = toastyFactory.setToasty('sucess', 'Mensagem enviada!')
        const loadingMessage = toastyFactory.setToasty('loading', 'Enviando mensagem...')
        const errorMissMessage = toastyFactory.setToasty('error', 'Algum campo não foi preenchido.')
        const errorMessage = toastyFactory.setToasty('error', 'Erro durante o envio da mensagem.')

        const loadingToastId = toast.info('Enviando', { ...loadingMessage, position: 'bottom-center', autoClose: 900 })

        try {
            if (!this.obj.name || !this.obj.email || !this.obj.message) throw new Error('incomplete')

            const response = await axios.post(this.mail, this.obj)
                .then((res) => {
                    if (res.status !== 200) throw new Error('Erro de envio');

                    toast.update(loadingToastId, sucessMessage)
                    return res
                })

            return response

        } catch (err) {

            if (err.message === 'incomplete') {
                toast.update(loadingToastId, errorMissMessage)
                return { message: err.message, error: err }
            }

            if (err.message === 'Erro de envio') {
                toast.update(loadingToastId, errorMessage)
                return { message: err.mesasge, error: err }
            }

            return { message: err.mesasge, error: err }

        } finally {
            setTimeout(() => {
                toast.dismiss();
            }, 3000);
        }
    }
}