export default class ToastFactory {
    constructor() {
        this.formConfig = {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            render: '',
            type: ''
        }
        this.downloadConfig = {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            render: '',
            type: ''
        }

    }

    getFormToasty(type, render) {
        switch (type) {
            case 'success':
                this.formConfig.type = 'success';
                this.formConfig.render = render || ''
                break;
            case 'info':
                this.formConfig.type = 'info';
                this.formConfig.render = render || ''
                break;
            case 'error':
                this.formConfig.type = 'error';
                this.formConfig.render = render || ''
                break;
            default:
                this.formConfig.type = 'warning';
                this.formConfig.render = 'Algo inesperado ocorreu. Tente novamente mais tarde';
                break;
        }
        return this.formConfig
    }

    getDownloadToasty(type, render) {
        switch (type) {
            case 'success':
                this.downloadConfig.type = 'success';
                this.downloadConfig.render = render || ''
                break;
            case 'info':
                this.downloadConfig.type = 'info';
                this.downloadConfig.render = render || ''
                break;
            case 'error':
                this.downloadConfig.type = 'error';
                this.downloadConfig.render = render || ''
                break;
            default:
                this.downloadConfig.type = 'warning';
                this.downloadConfig.render = 'Algo inesperado ocorreu. Tente novamente mais tarde';
                break;
        }
        return this.downloadConfig
    }
}







