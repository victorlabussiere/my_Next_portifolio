const handler = (req, res) => {
    try {
        res.status(200).json([
            'funcionando'
        ])
    } catch (err) {
        console.error('Nao funcionou')
    }
}

export default handler