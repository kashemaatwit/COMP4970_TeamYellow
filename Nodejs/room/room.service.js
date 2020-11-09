const pool = require("../../config/db");

module.exports = {
  InsertRoom: (data, callBack) => {
    pool.query(
      `insert into room(room_name,seat_count) 
                values(?,?)`,
      [
        data.room_name,
        data.seat_count,
       
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 
  QueryRoomById: (id, callBack) => 
  {
    pool.query(
      `SELECT * FROM room WHERE id = ${id}`,
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  QueryRoom: callBack => {
    pool.query(
      `SELECT * FROM room`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  ModifyRoomById: (id, room, result) => {
    pool.query(
      "UPDATE room SET room_name = ?, seat_count = ? WHERE id = ?",
      [room.room_name, room.seat_count, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found room with the id
          result({ error: "not_found" }, null);
          return;
        }
  
        console.log("updated room: ", { id: id, ...room });
        result(null, { id: id, ...room });
      }
    );
  },


  
  deleteRoom:(id, result) => {
    pool.query("DELETE FROM room WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found room with the id
        result({ error: "not_found" }, null);
        return;
      }
  
      console.log("deleted room with id: ", id);
      result(null, res);
    });
  
  },

  QuerySortedRoom: callBack => {
    pool.query(
      `SELECT * FROM room order by room_name`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
}