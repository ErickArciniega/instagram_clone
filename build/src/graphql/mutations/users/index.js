'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _addFollowing = require('./addFollowing');

var _addFollowing2 = _interopRequireDefault(_addFollowing);

var _addFollowers = require('./addFollowers');

var _addFollowers2 = _interopRequireDefault(_addFollowers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addUser: _add2.default,
    addFollowing: _addFollowing2.default,
    addFollowers: _addFollowers2.default
};