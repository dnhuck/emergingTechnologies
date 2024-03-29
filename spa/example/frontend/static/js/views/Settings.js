  
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Contact Me!</h1>
            <div class="container">

            <form action="#">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name..">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                <input type="reset" value="Submit">

            </form>
</div>
        `;
    }
}