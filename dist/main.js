Memory.settings = {
	username: "SNOOPPDJ"
}

var room_rutines = require('room');

module.exports.loop = function () {
	room_rutines.fn_collect_my_rooms_data();
}