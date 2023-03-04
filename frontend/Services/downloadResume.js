import axios from 'axios'
export default async function DownloadResume() {
    const baseUrl = process.env.BASE_URL

    try {
        const response = await axios.get(baseUrl + '/download', { responseType: 'blob' })
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')

        link.href = url
        link.setAttribute('download', 'curriculo-victor.pdf')

        return link.click()
    } catch (err) {
        console.error('Não foi possível realizar o download do currículo. Erro: ', err)
    }
}