import axios from "axios";

export default {
  getEvents: function() {
      return axios.get("/api/events")
  },

  newUser:  function(user, email, password) {
      axios.post("/api/users", 
      {
        username: user,
        email: email,
        password: password
      }).then(function(res){
          return(res);
      })
  }
};