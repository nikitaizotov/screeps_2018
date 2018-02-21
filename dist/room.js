var room_rutines = {
	fn_collect_my_rooms_data: function() {
		// Check rooms.
		// Get rooms where we have spawns. 
		// If we are this room owner. Collect data about this room.
		var spawns = _.filter(Game.spawns);
	    for (var index_spawns in spawns) {
	        var spawn_obj = spawns[index_spawns];
	        if (spawn_obj.owner.username != Memory.settings.username) {
	        	continue;
	        }

	        var room_name = spawn_obj.room.name;
	        if (!Memory.rooms[room_name]) {
	        	var room_obj = {
	        		name: room_name,
	        		owner: Memory.settings.username,
	    			sources: {},
	    			data: {} 
	        	}
	        	Memory.rooms[room_name] = room_obj;
	        }
		}
	}
}

module.exports = room_rutines;