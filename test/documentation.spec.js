/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/any/to-be-a-moment.md contains correct examples", function () {
        var testPromises = [];
        expect(moment(), 'to be a moment');
        expect(new Date(), 'not to be a moment');

        try {
            expect(new Date('2015-01-01'), 'to be a moment');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(new Date('2015-01-01'), 'to be a moment');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected new Date('Thu, 01 Jan 2015 00:00:00 GMT') to be a moment"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/to-be-after.md contains correct examples", function () {
        var testPromises = [];
        expect(moment(), 'to be after', moment().subtract(1, 'hour'));

        try {
            expect(moment('2015-02-03'), 'to be after', moment('2015-04-03'));
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-02-03'), 'to be after', moment('2015-04-03'));").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-02-03T00:00:00.000+01:00)\n" +
                "to be after moment(2015-04-03T00:00:00.000+02:00)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/to-be-before.md contains correct examples", function () {
        var testPromises = [];
        expect(moment(), 'to be before', moment().add(1, 'hour'));

        try {
            expect(moment('2015-04-03'), 'to be before', moment('2015-02-03'));
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-04-03'), 'to be before', moment('2015-02-03'));").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-04-03T00:00:00.000+02:00)\n" +
                "to be before moment(2015-02-03T00:00:00.000+01:00)"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/to-be-the-end-of.md contains correct examples", function () {
        var testPromises = [];
        expect(moment('2015-01-01 23:59:59.999'), 'to be the end of day');

        try {
            expect(moment('2015-01-01 00:00:00'), 'to be the end of day');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-01-01 00:00:00'), 'to be the end of day');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-01-01T00:00:00.000+01:00) to be the end of day"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/to-be-the-start-of.md contains correct examples", function () {
        var testPromises = [];
        expect(moment('2015-01-01'), 'to be the start of year');

        try {
            expect(moment('2015-01-01 01'), 'to be the start of year');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-01-01 01'), 'to be the start of year');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-01-01T01:00:00.000+01:00) to be the start of year"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/to-equal.md contains correct examples", function () {
        var testPromises = [];
        var date = moment();
        expect(date, 'to equal', date.clone());
        expect(moment(), 'not to equal', moment().add(1, 'millisecond'));

        var date = moment();
        expect(date, 'to equal', date.clone(), 'in milliseconds');
        expect(date, 'to equal', date.clone(), 'in seconds');
        expect(date, 'to equal', date.clone(), 'in minutes');
        expect(date, 'to equal', date.clone(), 'in hours');
        expect(date, 'to equal', date.clone(), 'in days');
        expect(date, 'to equal', date.clone(), 'in weeks');
        expect(date, 'to equal', date.clone(), 'in months');
        expect(date, 'to equal', date.clone(), 'in years');

        try {
            expect(moment('2015-11-01'), 'to equal', moment('2015-11-02'), 'in days');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-11-01'), 'to equal', moment('2015-11-02'), 'in days');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-11-01T00:00:00.000+01:00)\n" +
                "to equal moment(2015-11-02T00:00:00.000+01:00) in days\n" +
                "\n" +
                "-2015-11-01T00:00:00.000+01:00\n" +
                "+2015-11-02T00:00:00.000+01:00"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/to-satisfy.md contains correct examples", function () {
        var testPromises = [];
        var date = moment();
        expect(moment('2015-11-01'), 'to satisfy', '2015-11-01');

        expect(moment('2015-11-01'), 'to satisfy', { year: 2015, month: 10, day: 1 });

        try {
            expect(moment('2015-11-01'), 'to satisfy', { year: 2015, month: 11, day: 1 });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-11-01'), 'to satisfy', { year: 2015, month: 11, day: 1 });").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-11-01T00:00:00.000+01:00)\n" +
                "to satisfy { year: 2015, month: 11, day: 1 }"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/moment/when-formatted-with.md contains correct examples", function () {
        var testPromises = [];
        expect(moment('2015-11-02'), 'when formatted with', 'YYYYMMDD', 'to be', '20151102');

        try {
            expect(moment('2015-11-02'), 'when formatted with', 'YYYYMMDD', 'to be', '2015');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(moment('2015-11-02'), 'when formatted with', 'YYYYMMDD', 'to be', '2015');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-11-02T00:00:00.000+01:00)\n" +
                "when formatted with 'YYYYMMDD' to be '2015'\n" +
                "\n" +
                "-20151102\n" +
                "+2015"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        try {
            var date = moment('2015-11-06');
            expect(date, 'to equal', moment('2015-11-06 00:00:00'));
            expect(date, 'to equal', moment('2015-11-03'));
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var date = moment('2015-11-06');").nl();
                output.code("expect(date, 'to equal', moment('2015-11-06 00:00:00'));").nl();
                output.code("expect(date, 'to equal', moment('2015-11-03'));").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected moment(2015-11-06T00:00:00.000+01:00)\n" +
                "to equal moment(2015-11-03T00:00:00.000+01:00)\n" +
                "\n" +
                "-2015-11-06T00:00:00.000+01:00\n" +
                "+2015-11-03T00:00:00.000+01:00"
            );
        }
        return expect.promise.all(testPromises);
    });
});
