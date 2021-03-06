(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('moment'));
    } else if (typeof define === 'function' && define.amd) {
        define(['moment'], factory);
    } else {
        // TODO: global moment object is deprecated and will be removed in v3
        root.moment = root.moment || {};
        root.moment.unexpectedMoment = factory(root.moment);
    }
}(this, function (moment) {
    var outputFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

    return {
        name: 'unexpected-moment',

        installInto: function (expect) {
            expect.addType({
                name: 'moment',
                base: 'object',
                identify: function (value) {
                    return value && moment.isMoment(value);
                },
                equal: function (a, b) {
                    return a.isSame(b);
                },
                inspect: function (value, depth, output) {
                    var name = value.isUtc() ? 'moment.utc' : 'moment';
                    output.jsFunctionName(name)
                        .text('(')
                        .jsPrimitive(value.format(outputFormat))
                        .text(')');
                },
                diff: function (actual, expected, output, diff) {
                    return diff(actual.format(outputFormat), expected.format(outputFormat));
                }
            });

            expect.addAssertion('<any> [not] to be a moment', function (expect, subject) {
                expect(moment.isMoment(subject), '[not] to be true');
            });

            expect.addAssertion('<moment> [not] to be before <any>', function (expect, subject, value) {
                expect(subject.isBefore(value), '[not] to be true');
            });

            expect.addAssertion('<moment> [not] to be after <any>', function (expect, subject, value) {
                expect(subject.isAfter(value), '[not] to be true');
            });

            expect.addAssertion('<moment> when formatted with <string> <assertion>', function (expect, subject, format) {
                return expect.shift(subject.format(format));
            });

            expect.addAssertion('<moment> [not] to equal <moment> <string?>', function (expect, subject, value, label) {
                // TODO: validate granularity?
                var granularity = (label || '').replace(/^in /, '').replace(/s$/, '');

                if (subject.isSame(value, granularity) === expect.flags.not) {
                    expect.argsOutput = function (output) {
                        output.appendInspected(value);
                        if (granularity) {
                            output.sp().text(label);
                        }
                    };
                    expect.fail({
                        diff: function (output, diff, inspect, equal) {
                            return diff(subject, value);
                        }
                    });
                }
            });

            // TODO: error diff for this
            expect.addAssertion('<moment> [not] to be the start of (second|minute|hour|day|week|isoWeek|month|quarter|year)', function (expect, subject) {
                var unitOfTime = expect.alternations[0];
                expect(subject.isSame(subject.clone().startOf(unitOfTime)), '[not] to be true');
            });

            // TODO: error diff for this
            expect.addAssertion('<moment> [not] to be the end of (second|minute|hour|day|week|isoWeek|month|quarter|year)', function (expect, subject) {
                var unitOfTime = expect.alternations[0];
                expect(subject.isSame(subject.clone().endOf(unitOfTime)), '[not] to be true');
            });

            // TODO: error diff for this
            expect.addAssertion('<moment> to satisfy <any>', function (expect, subject, value) {
                expect(subject.isSame(value), 'to be true');
            });
        }
    };
}));
