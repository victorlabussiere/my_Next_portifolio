module.exports = class ToastFactory {
    constructor() { }
    static setToasty(type, render) {
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
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "light",
                render: render,
                type: 'info'
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
                pauseOnHover: false,
                draggable: false,
                theme: "light",
            }
        }

    }
}