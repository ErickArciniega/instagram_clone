'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FollowersType = exports.FollowingType = exports.UserInputType = exports.UserType = undefined;

var _graphql = require('graphql');

var _users = require('../../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserType = exports.UserType = new _graphql.GraphQLObjectType({

    name: "ListUsers",
    description: "Usuarios de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            username: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            website: {
                type: _graphql.GraphQLString
            },
            biography: {
                type: _graphql.GraphQLString
            },
            sex: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            },
            following: {
                type: new _graphql.GraphQLList(UserType),
                resolve: function resolve(user) {
                    var following = user.following;

                    return _users2.default.find({ '_id': { $in: following } }).exec();
                }
            },
            followers: {
                type: new _graphql.GraphQLList(UserType),
                resolve: function resolve(user) {
                    var followers = user.followers;

                    return _users2.default.find({ '_id': { $in: followers } }).exec();
                }
            },
            create_at: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
    //esto lo crea el usuario

    name: "addUsers",
    description: "Agrega, modifica nuevos usuarios a la BD",
    fields: function fields() {
        return {

            name: {
                type: _graphql.GraphQLString
            },
            lastname: {
                type: _graphql.GraphQLString
            },
            username: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            website: {
                type: _graphql.GraphQLString
            },
            biography: {
                type: _graphql.GraphQLString
            },
            sex: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            },
            password: {
                type: _graphql.GraphQLString
            }
        };
    }

});

var FollowingType = exports.FollowingType = new _graphql.GraphQLInputObjectType({
    name: "addFollowing",
    description: "Agrega un usuario a la lista de Following",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            }
        };
    }

});

var FollowersType = exports.FollowersType = new _graphql.GraphQLInputObjectType({
    name: "addFollowers",
    description: "Agrega un usuario a la lista de Followers",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            }
        };
    }

});