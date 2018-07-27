'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _photos = require('../../../models/photos');

var _photos2 = _interopRequireDefault(_photos);

var _photos3 = require('../../types/photos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _photos3.PhotoType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_photos3.PhotoInputType)
        }
    },
    resolve: function resolve(root, params) {
        var photos = new _photos2.default(params.data);
        var newPhoto = photos.save();
        if (!newPhoto) throw new Error("Error al crear foto");
        return newPhoto;
    }
};