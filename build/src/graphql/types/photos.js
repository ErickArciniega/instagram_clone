'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PhotoInputType = exports.PhotoType = undefined;

var _graphql = require('graphql');

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoType = exports.PhotoType = new _graphql.GraphQLObjectType({

    name: "ListPhotos",
    description: "Fotos de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            photo: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(photo) {
                    var user = photo.user;

                    return _users3.default.findById(user).exec();
                }
            },
            favoriteCount: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLInt)
            },
            upload_at: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var PhotoInputType = exports.PhotoInputType = new _graphql.GraphQLInputObjectType({
    //esto lo crea el usuario

    name: "addPhoto",
    description: "Agrega, modifica nuevas fotos a la BD",
    fields: function fields() {
        return {

            photo: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            user: {
                type: _graphql.GraphQLString
            }
        };
    }
});