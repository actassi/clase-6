export default class Componentes {
    constructor(parametro) {
        this.text = parametro;
        this.image = parametro;
        this.sound = parametro;
        this.items = parametro;
    }


    renderBoton() {
        return `<button>${this.text}</button>`;
    }

    renderImagen() {
        return `<img src="${this.image}">`;
    }

    renderSonido() {
        return `<audio controls><source src="${this.sound}" type="audio/ogg"></source></audio>`;
    }

    renderLista() {
        let html = "<ul>";
        for (let item of this.items) {
            html += `<li>${item}</li>`;
        }
        html += "</ul>";
        return html;
    }

}
