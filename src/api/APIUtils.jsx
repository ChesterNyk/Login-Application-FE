import axios from "axios";

const host = window.location.protocol + "//" + window.location.hostname + ":8080"

export const success = (response, next) => {
    console.log("SUCCESS RESPONSE >>> ", response)
    if (next) {
        if (response.data.result === "Success") {
            next({
                error: false,
                data: response.data.data.response
            });
        } else {
            next({
                error: true,
                data: {
                    errorCode: response.data.errorCode,
                    errorMessag: response.data.errorMessage,
                }
            })
        }
    }
}

export const fail = (err, next) => {
    console.log("ERROR RESPONSE >>> ", response)
    if (next) {
        next({
            error: true,
            data: {
                errorCode: err.response?.status || 500,
                errorMessag: err.message || "An error occured",
            }
        })
    }
}

export const getRequest = (path, next, param) => {
    const headers = {
        "Content-Type" : "application/json"
    }

    axios.get(host + path, {
        params: param,
        headers: headers,
        withCredentials: false,
    }).then((res) => {
        return success(res, next);
    }).catch ((err) => {
        console.log("Error for GET Request >>> " + path);
        return fail(err, next);
    })
}

export const postRequest = (path, next, body) => {
    const headers = {
        "Content-Type" : "application/json"
    }

    axios.post(host + path, body, {
        headers: headers,
        withCredentials: false,
    }).then((res) => {
        return success(res, next);
    }).catch ((err) => {
        console.log("Error for Post Request >>> " + path);
        return fail(err, next);
    })
}