"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PhotosSchema = new Schema({

    "photo": {
        type: String,
        required: true
    },
    "description": {
        type: String
    },
    "user": {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    "favoriteCount": {
        type: [Number],
        default: 0
    },
    "is_active": {
        type: Boolean,
        default: true
    },
    "upload_at": {
        type: Date,
        default: new Date()
    }

}, { collection: "Photos", timestamps: true });

exports.default = _mongoose2.default.model('Photos', PhotosSchema);