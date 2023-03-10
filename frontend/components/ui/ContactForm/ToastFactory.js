module.exports = class ToastFactory {
    constructor() { }
    setToasty(type, render) {
        let config = {}
        if (type === 'sucess') {
            return config = {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "light",
                render: render,
                type: 'success'
            }
        }

        if (type === 'info') {
            return config = {
                render: render,
                type: 'info',
                position: "bottom-center",
                autoClose: 900,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        }

        if (type === 'error') {
            return config = {
                render: render,
                type: 'error',
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }
        }

    }
}