'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _photos = require('../../../models/photos');

var _photos2 = _interopRequireDefault(_photos);

var _photos3 = require('../../types/photos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllPhotos = {

    type: new _graphql.GraphQLList(_photos3.PhotoType),
    resolve: function resolve() {
        var photos = _photos2.default.find().exec();
        if (!photos) throw new Error("Error al traer la BD");
        return photos;
    }
};

exports.default = queryAllPhotos;