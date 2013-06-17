(function() {
    function RepeatInRange(start, end, step) {
        this.start = start;
        this.end = end;
        this.step = step || 1;
        this.value = start;
    }

    RepeatInRange.prototype.get = function () {
        var value = this.value;
        this.value += this.step;
        if (this.value > this.end) {
            this.value = this.start;
        }
        return value;
    };

    mockie.Descriptor.extends(RepeatInRange);

    function RepeatInArray(array) {
        this.array = array;
        this.cursor = 0;
    }
    RepeatInArray.prototype.get = function () {
        var value = this.array[this.cursor];
        this.cursor++;
        if (this.cursor >= this.array.length) {
            this.cursor = 0;
        }
        return value;
    };

    mockie.Descriptor.extends(RepeatInArray);

    mockie.repeat = {
        inRange: function (start, end, step) {
            return new mockie.Generator(RepeatInRange, [start, end, step]);
        },

        inArray: function (array) {
            return new mockie.Generator(RepeatInArray, [array]);
        }
    };
}());