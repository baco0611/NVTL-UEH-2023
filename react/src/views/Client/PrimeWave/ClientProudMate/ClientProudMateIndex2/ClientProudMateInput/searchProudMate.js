import axiosClient from "../../../../../../context/axiosClient"

const searchMember = async (value, setResult, setClose) => {
    await axiosClient.post('/searchMember', {searchKey: value})
    .then(response => {
        if(response.data.status == 200) {
            if(response.data.data.length > 0)
                setResult(response.data.data)
            else
                setClose()
        }
        else
            setClose()
    })
    .catch(error => {
        setClose()
        console.log(error)
    })
}

const savingTeam = async (data) => {
    const payload = new FormData()
    payload.append('idMember1', data.idMember1)
    payload.append('idMember2', data.idMember2)
    payload.append('idMember3', data.idMember3)
    payload.append('teamName', data.teamName)

    return await axiosClient.post('/postProudMate', payload)
    .then(response => {
        return true
    })
    .catch(error => {
        console.log(error)
        return false
    })
}

export { 
    searchMember,
    savingTeam 
}