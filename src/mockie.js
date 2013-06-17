var mockie = {
    createDescriptor: function (data) {
        var result = {};
        for (var name in data) {
            if (data.hasOwnProperty(name)) {
                var value = data[name];
                if (value instanceof mockie.Generator) {
                    value = value.createInstance();
                }
                else if (Object.prototype.toString.call(value) === '[object Object]') {
                    value = mockie.createDescriptor(value);
                }
                result[name] = value;
            }
        }
        return result;
    },

    getSingle: function (descriptor) {
        var result = {};
        for (var name in descriptor) {
            if (descriptor.hasOwnProperty(name)) {
                var value = descriptor[name];
                if (value instanceof mockie.Descriptor) {
                    value = value.get();
                }
                else if (Object.prototype.toString.call(value) === '[object Object]') {
                    value = mockie.getSingle(value);
                }
                result[name] = value;
            }
        }
        return result;
    },

    getArray: function (descriptor, count) {
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(mockie.getSingle(descriptor));
        }
        return result;
    }
};
