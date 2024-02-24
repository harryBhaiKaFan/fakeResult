const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");



const App = {
    init: function () {
        console.log("Hello,Wordl!");
    }
};

window.onload = App.init.bind(App);