import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	articleUrl: { type: String},
	imgUrl: { type: String},
	created: { type: Number, default: Date.now() },
	creatorId: {type: ObjectId, ref: models.user.name, required: true},
	body: {type: String, required: true},
	shareCount: {type: Number, default: 0},
	viewCount: {type: Number, default: 0},
	keepCount: {type: Number, default: 0},
	tags: [{type: String}],
	vaults: [{ type: ObjectId, ref: models.vault.name, required: true }],
	// Relations
	
});

module.exports = mongoose.model(models.keep.name, schema);
