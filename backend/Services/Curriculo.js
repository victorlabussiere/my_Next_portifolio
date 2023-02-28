const axios = require('axios')
const port = 8080

export default async function HandleDownload() {
    try {
        const response = await axios.get('http://localhost:' + port + '/download', {
            responseType: 'blob'
        });
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')

        link.href = url
        link.setAttribute('download', 'curriculo.pdf')
        document.body.appendChild(link)
        return link.click()
    }
    catch (err) {
        return console.error('Erro ao tentar realizar o download do arquivo:', err)
    }
}