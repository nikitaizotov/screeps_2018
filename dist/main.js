var rutines = require('settings');
var room_rutines = require('room');
var rutines = require('rutines');

module.exports.loop = function () {
	room_rutines.fn_collect_my_rooms_data();
	//rutines.fn_run_rooms();
}