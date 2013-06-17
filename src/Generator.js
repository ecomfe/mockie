mockie.Generator = function (type, args) {
    this.type = type;
    this.args = args;
};

mockie.Generator.prototype.createInstance = function () {
    function Empty() {};
    Empty.prototype = this.type.prototype;
    var instance = new Empty();
    this.type.apply(instance, this.args);
    return instance;
};