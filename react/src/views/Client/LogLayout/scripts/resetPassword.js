import axiosClient from "../../../../context/axiosClient"

const sendRequest = async (email, setError) => {
    console.log(email)
    return await axiosClient.post('/reset-password', {email})
    .then(response => {
        console.log(response)
        return true
    })
    .catch(error => {
        console.log(error)
        return false
    })
}

const sendPassword = async (token, state, setError) => {
    const payload = new FormData()
    payload.append('new_password', state.newPassword)
    payload.append('confirm_new_password', state.confirmNewPassword)

    return await axiosClient.post(`/reset-password/${token}`, payload)
    .then(response => {
        console.log(response)
        return true
    })
    .catch(error => {
        console.log(error)
        return false
    })
}

export {
    sendRequest,
    sendPassword
}