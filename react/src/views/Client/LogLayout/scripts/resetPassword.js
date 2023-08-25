import axiosClient from "../../../../context/axiosClient"

const sendRequest = async (email, setError) => {
    console.log(email)
    return await axiosClient.post('/reset-password', {email})
    .then(response => {
        // console.log(response)
        if(response.data.status == 200) {
            return true
        } else {
            setError(response.data)
            return email
        }
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
        // console.log(response)
        if(response.data.status == 200)
            return true
        else return false
    })
    .catch(error => {
        return false
    })
}

const emailForgotError = error => {
    console.log(error)
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }

    const $ = document.querySelector.bind(document)
    const mail = $('#client-email')
    const boxElement = getParent(mail, '.client-sign-item')
    boxElement.classList.add('invalid')  
    const spanElement = boxElement.querySelector('span')
    spanElement.innerText = error.mess 
}

const resetError = error => {

}

export {
    sendRequest,
    sendPassword,
    emailForgotError,
    resetError
}