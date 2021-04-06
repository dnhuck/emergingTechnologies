import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome!!</h1>
            <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/139548722_224923222522764_4478175312747114093_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=r2vujLhK6l4AX8q9g6D&_nc_ht=scontent-ort2-2.xx&oh=72db81926595b1f2ffbbe0e25d7f5c7a&oe=60875135" alt="sparkler portrait" width="200px">
            <p>
                Meet your Photographer. David Huck got his start from his love
                of traveling and adventure. He started taking pictures on his iphone
                but quickley realized that was not enough to make this a passion in the
                long run. He bought his first camera and it was off to the races. He now 
                has a decent business catering to clients for both photo and video and over
                100,000 people have seen his work!
            </p>
            <p>
                <a href="/posts" data-link>View recent work</a>.
            </p>
        `;
    }
}