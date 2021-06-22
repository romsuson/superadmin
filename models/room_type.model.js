const mongoose = require('mongoose');
var Int32 = require('mongoose-int32');
const Schema = mongoose.Schema;

const room_typeSchema = new Schema({

     name: {type: String},
      room_type: {type: String},
      max_person: {type: String},
      hour_duration: {type: String},
      extra_person_charge: {type: String},
      roomprice: {type: String},
      status: {type: String},
      rate_mode: {type: String},
      vacant: {type: Int32},
      occupied: {type: Int32},
      promo_price_hour: {type: String},
      roomprice_hour: {type: String},
      duration_mode: {type: String},
      promo_duration: {type: String},
      img: {type: String},
      temp_id: {type: String},
      extension: {type: String},
      hotel_address: {type: String},
      hotel_name: {type: String},


}, {
  timestamps: true,
  collection: 'Task'
});

const Task = mongoose.model('Task', room_typeSchema);

module.exports = Task;