import axiosClient from '../../../../context/axiosClient'

const handleSignIn = async ({ state, setUser, isRemember, setError }) => {
    const payload = new FormData()

    payload.append('accountName', state.accountName)
    payload.append('password', state.password)

    await axiosClient.post('/loginAccount', payload)
    .then((response) => {
        if(response.data.status == 200) {
            setUser(response.data.userAccount[0], isRemember)
            window.location = '/'
        }
        else {
            setError(response.data)
        }
    })
    .catch(error => {
        console.log(error)
    })
}

const loginError = async (error) => {
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }

    const $ = document.querySelector.bind(document)
    const accountName = $('#client-accountName')
    const password = $('#client-password')

    for(var key in error) {
        let errorElement
        switch (key) {
            case "accountName":
                errorElement = accountName
                break;
            case "password":
                errorElement = password
                break;
            default:
                break;
        }

        const boxElement = getParent(errorElement, '.client-sign-item')
        boxElement.classList.add('invalid')  
        const spanElement = boxElement.querySelector('span')
        spanElement.innerText = error[key]       
    }
}

const handleSignUp = async ({ state, setIsSuccess, setUserValue, setError }) => {
    const payload = new FormData()

    payload.append('fullName', state.fullName)
    payload.append('department', state.department)
    payload.append('phone', state.phone)
    payload.append('email', state.email)
    payload.append('studentCode', state.studentCode)
    payload.append('password', state.password)

    await axiosClient.post('/registerAccount', payload)
    .then((response) => {
        if(response.data.status == 200) {
            setIsSuccess(true)
            setUserValue(response.data.userAccount[0])
        }
    })
    .catch(error => {
        setError(error.response.data.errors)
    })
}

const signUpError = (error) => {
    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }

    const $ = document.querySelector.bind(document)
    const email = $('#client-email')
    const studentCode = $('#client-studentCode')

    for(var key in error) {
        let errorElement
        switch (key) {
            case "studentCode":
                errorElement = studentCode
                break;
            case "email":
                errorElement = email
                break;
            default:
                break;
        }

        const boxElement = getParent(errorElement, '.client-sign-item')
        boxElement.classList.add('invalid')  
        const spanElement = boxElement.querySelector('span')
        spanElement.innerText = error[key]       
    }
}

export {
    handleSignIn,
    handleSignUp,
    loginError,
    signUpError
}