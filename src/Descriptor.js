mockie.Descriptor = function (options) {
    for (var name in options) {
        if (options.hasOwnProperty(name)) {
            this[name] = options[name];
        }
    }
};

mockie.Descriptor.prototype.get = function () {
};

mockie.Descriptor.extends = function (subType) {
    var Empty = function () {};
    Empty.prototype = mockie.Descriptor.prototype;
    var proto = new Empty();

    var originalPrototype = subType.prototype;
    subType.prototype = proto;

    for (var key in originalPrototype) {
        proto[key] = originalPrototype[key];
    }
    subType.prototype.constructor = mockie.Descriptor;

    return subType;
};