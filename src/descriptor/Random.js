(function() {
    function RandomNumber(type, min, max) {
        if (arguments.length === 1) {
            min = 0;
            max = Number.MAX_VALUE;
        }
        else if (arguments.length === 2) {
            max = min;
            min = 0;
        }
        this.min = min;
        this.max = max;
        this.type = type;
    }

    RandomNumber.prototype.get = function () {
        var n = Math.random();
        n = n * (this.max - this.min) + this.min;

        if (this.type === 'integer') {
            n = Math.round(n);
        }

        return n;
    };

    mockie.Descriptor.extends(RandomNumber);

    function RandomInArray(array) {
        this.array = array;
    }

    RandomInArray.prototype.get = function () {
        var i = Math.floor(Math.random() * this.array.length);
        return this.array[i];
    }

    mockie.Descriptor.extends(RandomInArray);

    mockie.random = {
        integer: function (min, max) {
            return new mockie.Generator(RandomNumber, ['integer', min, max]);
        },

        number: function (min, max) {
            return new mockie.Generator(RandomNumber, ['number', min, max]);
        },

        inArray: function (array) {
            return new mockie.Generator(RandomInArray, [array]);
        }
    }
}());