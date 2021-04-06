import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/165784086_266845471663872_7679660062858616486_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=chRzfnwEaZgAX8_Xct0&_nc_ht=scontent-ort2-2.xx&oh=f27a87d9cfdbf8a99256d1b403d13663&oe=608740F9" alt="sparkler portrait" width="200px">
            <p>Sparkler Portrait in Downtown Des Moines, Iowa.</p>
            <a href="http://davidhuck.net/davidhuckphotography/" target="_blank">Click here to see my photography portfolio</a>
        `;
    }
}