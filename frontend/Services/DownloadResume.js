const axios = require('axios')

export default async function handleDownload() {
    const baseUrl = window.location.href
    const params = 'api/download'
    try {
        const response = await axios.get(baseUrl + params, { responseType: 'blob' })
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', 'curriculo.pdf');

        document.body.appendChild(link);
        return link.click();

    } catch (err) {
        console.error('Erro', err)
    }
}