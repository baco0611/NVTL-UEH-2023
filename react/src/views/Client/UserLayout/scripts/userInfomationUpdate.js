import axiosClient from "../../../../context/axiosClient"

const handleUpdateInformation = async ({ state, setUser, getUserId, setError }) => {
    const id = getUserId(String(state.id))
    
    const payload = new FormData()
    payload.append('idUser', id.real)
    payload.append('fullName', state.fullName)
    payload.append('department', state.department)
    payload.append('phone', state.phone)
    payload.append('email', state.email)
    payload.append('studentCode', state.studentCode)

    const isRemember = localStorage.getItem('ACCESS_USER') != null

    return await axiosClient.post('/updateAccount', payload)
    .then(response => {
        if(response.status == 200)
        {
            setUser(response.data.userAccount[0], isRemember)
            return true
        }
        return false
    })
    .catch(error => {
        setError(error.response.data.errors)
        return false
    })
}

const informationError = async (error) => {
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }
    const $ = document.querySelector.bind(document)
    const fullName = $('#client-fullName')
    const phone = $('#client-phone')
    const email = $('#client-email')
    const studentCode = $('#client-studentCode')

    for(var key in error) {
        let errorElement
        switch (key) {
            case "studentCode":
                errorElement = studentCode
                break;
            case "phone":
                errorElement = phone
                break;
            case "email":
                errorElement = email
                break;
            case "fullName":
                errorElement = fullName
                break;
            default:
                break;
        }

        if(!errorElement) continue
        const boxElement = getParent(errorElement, '.client-sign-item')
        boxElement.classList.add('invalid')  
        const spanElement = boxElement.querySelector('span')
        spanElement.innerText = error[key]       
    }
}

const handleUpdatePassword = async ({ state, getUserId, setError }) => {
    const id = getUserId(state.id.real)
    const payload = new FormData()
    payload.append('idUser', id.real)
    payload.append('new_password', state.newPassword)
    payload.append('confirm_new_password', state.confirmPassword)
    payload.append('current_password', state.oldPassword)

    return await axiosClient.post('/updatePassword', payload)
    .then(response => {
        if(response.data.status == 200)
            return true
        else {
            setError(response.data)
        }
        return false
    })
    .catch(error => {
        return false
    })
}

const passwordError = (error) => {
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }
    const $ = document.querySelector.bind(document)
    const oldPass = $('#client-old-password')
    const newPass = $('#client-new-password')
    const confirmPass = $('#client-new-confirmPassword')

    for(var key in error) {
        let errorElement
        switch (key) {
            case "current_password":
                errorElement = oldPass
                break;
            case "new_password":
                errorElement = newPass
                break;
            case "confirm_new_password":
                errorElement = confirmPass
                break;
            default:
                break;
        }

        if(!errorElement) continue
        const boxElement = getParent(errorElement, '.client-sign-item')
        boxElement.classList.add('invalid')  
        const spanElement = boxElement.querySelector('span')
        spanElement.innerText = error[key]       
    }
}

export {
    handleUpdateInformation,
    handleUpdatePassword,
    informationError,
    passwordError
}