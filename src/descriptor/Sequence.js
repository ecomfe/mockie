(function() {
    function Sequence(start, step) {
        this.start = start == null ? 1 : start;
        this.step = step || 1;
        this.value = start;
    }

    Sequence.prototype.get = function () {
        var value = this.value;
        this.value += this.step;
        return value;
    };

    mockie.Descriptor.extends(Sequence);

    mockie.sequence = function (start, step) {
        return new mockie.Generator(Sequence, [start, step]);
    };
}());