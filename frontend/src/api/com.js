
import axios from "axios";

export default {


    postMission() {
        // radiovalues als strings

    },

    getMissions(plz) {
        // mindestens 3 ziffern

    },

    getMission(id) {
        //only logged in

        //geolocation in frontend
    },

    acceptMisson() {

    },












    getFiles() {
        return new Promise(resolve => {
            axios.get("/editorapi/getfiles").then(r => resolve(r.data));
        });
    },

    getLocks() {
        return new Promise(resolve => {
            axios.get("/editorapi/getlocks").then(r => resolve(r.data));
        });
    },

    saveFileChanges(path, content) {
        axios.post("/editorapi/savefilechanges",{ path, content, connectionid: echo.socketId() });
    },

};



