class Database_Facade {
    verifyInSession(session) {}
    verifyInTimeslot(timeslot) {}
    verifyInRoom(room) {}
    verifyInSpeaker(speaker) {}

    verifyOutSession(String) {}
    verifyOutTimeslot(String) {}
    verifyOutRoom(String) {}
    verifyOutSpeaker(String) {}

    insertSession(session) {}
    insertTimeslot(timeslot) {}
    insertRoom (room) {}
    insertSpeaker (speaker) {}

    modifySession(sessionId) {}
    modifyTimeslot(timeslotId) {}
    modifyRoom(roomId) {}
    modifySpeaker(speakerId) {}

    removeSession(sessionId) {}
    removeTimeslot(timeslotId) {}
    removeRoom(roomId) {}
    removeSpeaker(speakerId) {}

    querySessions() {}
    queryTimeslots() {}
    queryRooms() {}
    querySpeakers() {}

    querySession(sessionId) {}
    queryTimeslot(timeslotId) {}
    queryRoom(roomId) {}
    querySpeaker(speakerId) {}

    querySessionsByTimeslot() {}
    querySessionsByRoom() {}
    querySessionsBySpeaker() {}

    dbExists() {}
}