import axiosClient from '../../../../context/axiosClient'

const handleUpdateStage = async (state) => {
    return await axiosClient.post('/castingStage', state)
    .then(response => {
        console.log(response)
        if(response.data.status == 200) 
            return true
        return false
    })
    .catch(error => {
        return false
    })
}

const handleUpdateMC = async (state) => {
    return await axiosClient.post('/castingMC', state)
    .then(response => {
        console.log(response)
        if(response.data.status == 200) 
            return true
        return false
    })
    .catch(error => {
        return false
    })
}

export {
    handleUpdateStage,
    handleUpdateMC
}