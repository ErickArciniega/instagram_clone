'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _all = require('./all');

var _all2 = _interopRequireDefault(_all);

var _single = require('./single');

var _single2 = _interopRequireDefault(_single);

var _userPhotos = require('./userPhotos');

var _userPhotos2 = _interopRequireDefault(_userPhotos);

var _newsfeed = require('./newsfeed');

var _newsfeed2 = _interopRequireDefault(_newsfeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    allPhotos: _all2.default,
    singlePhoto: _single2.default,
    userPhotos: _userPhotos2.default
    //newsFeed
};