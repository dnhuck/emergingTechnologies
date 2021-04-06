import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `
            <h1> Home Page </h1>
        `;
    }
}