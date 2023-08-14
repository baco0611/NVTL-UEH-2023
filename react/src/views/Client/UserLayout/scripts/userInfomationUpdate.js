const handleUpdateInformation = ({ state, setUser, getUserId }) => {
    const id = getUserId(String(state.id))
    
    const payload = new FormData()
    payload.append('id', id.real)
    payload.append('fullName', state.fullName)
    payload.append('department', state.department)
    payload.append('phone', state.phone)
    payload.append('email', state.email)
    payload.append('studentCode', state.studentCode)

    const isRemember = localStorage.getItem('ACCESS_USER') != null
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