'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryNewsFeed;

var _graphql = require('graphql');

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

var _photos = require('../../../models/photos');

var _photos2 = _interopRequireDefault(_photos);

var _photos3 = require('../../types/photos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var queryNewsFeed = (_queryNewsFeed = {

    type: _users3.UserType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        },
        following: {}
    }
}, _defineProperty(_queryNewsFeed, 'type', new _graphql.GraphQLList(_users3.FollowingType)), _defineProperty(_queryNewsFeed, 'type', new _graphql.GraphQLList(_photos3.PhotoType)), _defineProperty(_queryNewsFeed, 'resolve', function resolve(root, params) {
    //const user = User.findById(params.id).exec();
    var newphotos = _photos2.default.find({ "user": params.id }).sort({ upload_at: -1 }).exec();
    return newphotos;
}), _queryNewsFeed);
exports.default = queryNewsFeed;