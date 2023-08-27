import axiosClient from "../../../../../context/axiosClient"

const handleUploadProof = async (value) => {
    console.log(value)
    const payload = new FormData()
    payload.append('idProudMate', value.idProudMate)
    payload.append('proof', value.proof)
    payload.append('proofName', value.proofName)

    return await axiosClient.post('/postProof', payload)
    .then(response => {
        console.log(response)
        return true
    })
    .catch(error => {
        console.log(error)
        return false
    })
}

export { handleUploadProof }