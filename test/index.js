var path = require('path');

var test = require('tape');
var adventure = require('workshopper-adventure/adventure');
var javascripting = path.join(__dirname, '../', 'node_modules', 'javascripting');
var jsing = adventure({
    name: 'javascripting',
    appDir: javascripting,
    languages: ['en']
});

var problems = require(path.join(javascripting, 'menu.json'));
jsing.lang = 'en';

problems.forEach(function(problem, idx) {
    var p = problem.toLowerCase().replace(/\s/g, '-');
    var pfn = p + '.js';
    var dir = path.join(javascripting, 'problems', p);
    jsing.add(problem, function() {
        return require(dir);
    });

    test(problem, function(t) {
        t.plan(1);

        // Space out the verifications
        setTimeout(function() {
            jsing.loadExercise(problem).verify([pfn], function(err, message) {
                t.ok(err, "javascripting verifying " + pfn);
            });
        }, idx * 200);
    });
});
