import Dashboard from "./views/Dashboard.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () =>{
    const routes = [
        {path: "/", view: () => console.log("viewing Dashbord") },
        // {path: "/posts", view: () => console.log("viewing Posts") },
        // {path: "/profile", view: () => console.log("viewing Profile") }
    ];

    // test each route
    const potentialMatches = routes.map(route =>{
        return{
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHTML();

    //console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () =>{

    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});