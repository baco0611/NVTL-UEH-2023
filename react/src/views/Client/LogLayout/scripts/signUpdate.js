import axiosClient from '../../../../context/axiosClient'

const handleSignIn = async ({ state, setUser, isRemember }) => {
    const payload = new FormData()

    payload.append('studentCode', state.studentCode)
    payload.append('password', state.password)

    await axiosClient.post('/loginAccount', payload)
        .then((response) => {
            console.log(response)
            if (response.data.status == 200) {
                setUser(response.data.userAccount[0], isRemember)
                window.location = '/'
            }
        })
}

const handleSignUp = async ({ state, setIsSuccess, setUserValue }) => {
    const payload = new FormData()

    payload.append('fullName', state.fullName)
    payload.append('department', state.department)
    payload.append('phone', state.phone)
    payload.append('email', state.email)
    payload.append('studentCode', state.studentCode)
    payload.append('password', state.password)

    await axiosClient.post('/registerAccount', payload)
        .then((response) => {
            console.log(response)
            if (response.data.status == 200) {
                setIsSuccess(true)
                setUserValue({
                    id: 3,
                    fullName: "Huỳnh Văn Nguyên Bảo",
                    studentCode: "21T1020241",
                    department: "Viện đào tạo quốc tế (ISB)",
                    email: "baoblink@gmail.com",
                    phone: "0905920814",
                    permission: 0
                })
            }
        })
        .catch(error => console.log(error))
}

export {
    handleSignIn,
    handleSignUp
}