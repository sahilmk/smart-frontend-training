const States = function () {
    this.currentState = new homeState(this);

    this.init = function (newState) {
        this.change(new homeState);
    }
    this.change = function (state) {
        this.currentState = state;
    }
}

const heading = document.getElementById('heading');
const content = document.getElementById('content');

const homeState = function () {
    heading.innerText = '';
    content.innerHTML = `
        <div class="jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    `;
}

const aboutState = function () {
    heading.innerText = 'About Us';
    content.innerHTML = `
    <p>This is the about page</p>
`;
}

const contactState = function () {
    heading.innerText = 'Contact Us';
    content.innerHTML = `
    <form>
        <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
        </div>
        <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
`;
}

const state = new States;

document.getElementById('home').addEventListener('click', function (e) {
    state.change(new homeState);
    e.preventDefault();
});

document.getElementById('about').addEventListener('click', function (e) {
    state.change(new aboutState);
    e.preventDefault();
});

document.getElementById('contact').addEventListener('click', function (e) {
    state.change(new contactState);
    e.preventDefault();
});
