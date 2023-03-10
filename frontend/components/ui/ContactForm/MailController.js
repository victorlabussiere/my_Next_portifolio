import axios from 'axios'
import { toast, ProgressBar } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToasty } from './ToastFactory'

export class MailController {
    constructor(mail, objForm) {
        this.mail = mail
        this.obj = { ...objForm }
    }

    async sendForm() {
        const loadingToastId = toast('Enviando', { ...setToasty('loading', 'Enviando mensagem...'), position: 'bottom-center', autoClose: 900 })

        try {
            if (!this.obj.name || !this.obj.email || !this.obj.message) throw new Error('incomplete')
            let setProgress = 0
            const response = await axios.post(this.mail, { ...this.obj, pending: 'Enviando...', sucess: 'Mensagem enviada!', error: 'Erro no envio.' }, {
                onUploadProgress: (progress) => {
                    const percent = Math.round((progress.loaded * 100) / progress.total);
                    setProgress = percent

                    toast.update(loadingToastId, {
                        ...setToasty('info', 'Enviando...'),
                        progress: percent
                    })


                    if (percent === 100) return toast.update(loadingToastId, setToasty('sucess', 'Mensagem enviada!'))
                }
            })

            return response

        } catch (err) {

            if (err.message === 'incomplete') {
                toast.update(loadingToastId, setToasty('error', 'Algum campo não foi preenchido.'))
                return { message: err.message, error: err }
            }

            if (err.message === 'Erro de envio') {
                toast.update(loadingToastId, setToasty('error', 'Erro durante o envio da mensagem.'))
                return { message: err.mesasge, error: err }
            }

            return { message: err.mesasge, error: err }
        }
    }
}