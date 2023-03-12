import axios from 'axios'
import { toast } from 'react-toastify'
import ToastFactory from './ToastFactory'

export class HandlerDownload {
    constructor() {
        this.pdfUrl = process.env.DOWNLOAD_API
        this.toastyConfig = new ToastFactory
        this.setToast = (type, render) => this.toastyConfig.getDownloadToasty(type, render)
    }

    _setLinkDownload(data) {
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        link.href = url
        link.download = 'curriculo-victor.pdf'

        document.body.append(link)
        link.click()
        document.body.removeChild(link)

        return void (0)
    }

    async download() {
        const toasty = toast.info('Preparando seu download', { ...this.setToast('info', '') })

        try {
            const response = await axios.get(this.pdfUrl, { responseType: 'blob' })
                .then(res => {
                    if (res.status !== 200) throw new Error('no-response')

                    this._setLinkDownload(res.data)
                    toast.update(toasty, { ...this.setToast('success', 'Arquivo pronto para download!') })
                    return void (0)
                })
                .catch(err => {
                    toast.update('error', 'Não foi possível realizar o download, tente novamente mais tarde.')
                    console.error('error', err)
                })

            return response
        } catch (err) { console.error('error', err) }
        finally {
            setTimeout(() => {
                toast.dismiss()
            }, 3000);
        }
    }
}