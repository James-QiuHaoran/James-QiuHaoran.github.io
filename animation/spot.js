(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);

    document.addEventListener("DOMContentLoaded", start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('I'))
        .then(() => engine.shake())
        .then(() => engine.toText('LOVE'))
        .then(() => engine.shake())
        .then(() => engine.toText('YOU'))
        .then(() => engine.shake())
        .then(() => engine.toText('^_^'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();