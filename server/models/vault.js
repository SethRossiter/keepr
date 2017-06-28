import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name, required: true},
  collaborators: [{type: ObjectId, ref: models.user.name}],
  // vaultId: {type: ObjectId, ref: models.vault.name, required: true},
  keeps: [{type: ObjectId, ref: models.keep.name}]
  
});

module.exports = mongoose.model(models.vault.name, schema);