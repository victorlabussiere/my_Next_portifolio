module.exports = function setToasty(type, render) {
    let config = {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
        render: render,
        type: ''
    }

    switch (type) {
        case 'success':
            config.type = 'success';
            break;
        case 'info':
            config.type = 'info';
            break;
        case 'error':
            config.type = 'error';
            break;
        default:
            config.type = 'warning';
            config.render = 'Algo inesperado ocorreu. Tente novamente mais tarde';
            break;
    }

    return config;
}





