Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'welcome'
});

Router.route('/resume', {
    name: 'resume'
});

Router.route('/contact', {
    name: 'contact'
});

Router.route('/aboutme', {
    name: 'aboutme'
});

Router.route('/portfolio', {
    name: 'portfolio'
});

