import axios from 'axios'
import { toast } from 'react-toastify'
import ToastFactory from './ToastFactory'

export class HandlerDownload {
    constructor() {
        this.pdfUrl = process.env.DOWNLOAD_API || 'http://localhost:3001/download'
        this.toastyConfig = new ToastFactory
        this.setToast = (render) => this.toastyConfig.getDownloadToasty(render)
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

        toast('Preparando seu download', { ...this.setToast('info', '') })

        try {
            const response = await axios.get(this.pdfUrl, { responseType: 'blob' })
                .then(res => {
                    if (res.status !== 200) throw new Error('no-response')

                    this._setLinkDownload(res.data)
                    toast('Arquivo pronto para download!', { ...this.setToast('success') })
                    return void (0)
                })
                .catch(err => {
                    toast.update('error', 'Não foi possível realizar o download, tente novamente mais tarde.')
                    console.error('error', err)
                })

            return response
        } catch (err) { console.error('error', err) }
    }
}