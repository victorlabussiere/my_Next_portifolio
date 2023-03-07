module.exports = class Logos {
    constructor() {
        this.jsData = {
            src: '/logos/jsLogo.png',
            width: 56,
            height: 56,
            alt: 'Javascript Logo',
            name: 'Javscript'
        }
        this.tsData = {
            src: '/logos/tsLogo.png',
            width: 56,
            height: 56,
            alt: 'Typescript Logo',
            name: 'Typescript'

        }
        this.reactData = {
            src: '/logos/reactLogo.png',
            width: 56,
            height: 56,
            alt: 'React Logo',
            name: 'React JS'
        }
        this.nextData = {
            src: '/logos/nextLogo.png',
            width: 56,
            height: 56,
            alt: 'Next Logo',
            name: 'Next'

        }
        this.nodeData = {
            src: '/logos/nodeLogo.png',
            width: 56,
            height: 56,
            alt: 'Node JS Logo',
            name: 'Node JS'

        }
        this.htmlData = {
            src: '/logos/htmlLogo.png',
            width: 56,
            height: 56,
            alt: 'HTML Logo',
            name: 'HTML5'

        }
        this.cssData = {
            src: '/logos/cssLogo.png',
            width: 56,
            height: 56,
            alt: 'CSS Logo',
            name: 'CSS3'

        }
        this.sassData = {
            src: '/logos/sassLogo.png',
            width: 56,
            height: 56,
            alt: 'SASS Logo',
            name: 'SASS / SCSS'

        }
        this.gitBashData = {
            src: '/logos/gitbashLogo.png',
            width: 56,
            height: 56,
            alt: 'GIT Logo',
            name: 'GIT Bash'
        }
        this.gitHubData = {
            src: '/logos/githubLogo.png',
            width: 56,
            height: 56,
            alt: 'GitHub Logo',
            name: 'Github'
        }
        this.figmaData = {
            src: '/logos/figmaLogo.png',
            width: 56,
            height: 56,
            alt: 'Figma Logo',
            name: 'Figma'
        }
        this.adobeXdData = {
            src: '/logos/adobexdLogo.png',
            width: 56,
            height: 56,
            alt: 'Adobe XD Logo',
            name: 'Adobe XD'
        }
        this.corelData = {
            src: '/logos/corelLogo.png',
            width: 56,
            height: 56,
            alt: 'CorelDraw Logo',
            name: 'CorelDraw'
        }
        this.adobeIllustratorData = {
            src: '/logos/illustratorLogo.png',
            width: 56,
            height: 56,
            alt: 'Adobe Illustrator Logo',
            name: 'Adobe Illustrator'
        }

    }
    getData(key) {

        switch (key) {
            case 'javascript':
                return this.jsData
            case 'typescript':
                return this.tsData
            case 'react':
                return this.reactData
            case 'next':
                return this.nextData
            case 'node':
                return this.nodeData
            case 'html':
                return this.htmlData
            case 'css':
                return this.cssData
            case 'sass':
                return this.sassData
            case 'gitbash':
                return this.gitBashData
            case 'github':
                return this.gitHubData
            case 'figma':
                return this.figmaData
            case 'adobeXd':
                return this.adobeXdData
            case 'corel':
                return this.corelData
            case 'illustrator':
                return this.adobeIllustratorData
            default:
                break;
        }
    }
}