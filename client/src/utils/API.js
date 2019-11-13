import axios from "axios";

export default {
    getEvents: function () {
        return axios.get("/api/events")
    },

    newUser: function (user, email, password) {
        axios.post("/api/users",
            {
                username: user,
                email: email,
                password: password
            }).then(function (res) {
                return (res);
            })
    },

    getUser: function () {
        return axios.get("/api/users")
    },

    postComment: function (commento) {
        axios.post("/api/comments",
            {
                user: "TEST",
                comment: commento,
                post: "TEST POST",
                date: 11/12/2019
            }).then(function (res) {
                return (res);
            })
    },

    getComments: function () {
        return axios.get("/api/comments")
    }
};