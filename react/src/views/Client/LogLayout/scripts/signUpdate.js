import axiosClient from '../../../../context/axiosClient'

const handleSignIn = async ({ state, setUser, isRemember }) => {
    await axiosClient.post('/loginAccount', state)
    .then((response) => {
        console.log(response)
        if(response.data.status == 200) {
            setUser(response.data.userAccount[0], isRemember)
            window.location = '/'
        }
    })
}

const handelSignUp = async ({ state, setIsSuccess, setUserValue }) => {
    await axiosClient.post('/registerAccount', state)
    .then((response) => {
        console.log(response)
        if(response.data.status == 200) {
            setIsSuccess(true)
            setUserValue({
                id:3,
                fullName:"Huỳnh Văn Nguyên Bảo",
                studentCode:"21T1020241",
                department:"Viện đào tạo quốc tế (ISB)",
                email:"baoblink@gmail.com",
                phone:"0905920814",
                permission: 0
            })
        }
    })
}

export {
    handleSignIn,
    handelSignUp
}