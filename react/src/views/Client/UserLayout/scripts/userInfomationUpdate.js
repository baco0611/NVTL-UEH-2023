import axiosClient from "../../../../context/axiosClient"

const handleUpdateInformation = async ({ state, setUser, getUserId }) => {
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
        console.log(response)
        if(response.status == 200)
        {
            setUser(response.data.userAccount[0], isRemember)
            return true
        }
        return false
    })
}

const handleUpdatePassword = ({ state, getUserId }) => {
    const id = getUserId(state.id)

    const payload = new FormData()
    payload.append('id', id.real)
    payload.append('newPassword', state.newPassword)
    payload.append('oldPassword', state.oldPassword)
}

export {
    handleUpdateInformation,
    handleUpdatePassword
}