import axiosClient from '../../../../../context/axiosClient'

const handleApply = async (value, setError) => {
    return await axiosClient.post('/recruitment_post', value)
    .then(response => {
        if(response.data.status == 200)
            return true

        return false
    })
    .catch(error => {
        // console.log(error)
        if(error.response)
            setError(error.response.data.errors)
        return false
    })
}

const errorInformation = (error) => {
    // console.log(error)

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }

    const $ = document.querySelector.bind(document)
    const fullName = $('#recruit-fullName')
    const studentCode = $('#recruit-studentCode')
    const email = $('#recruit-email')
    const phone = $('#recruit-phone')
    const accountLink = $('#recruit-accountLink')

    for(var key in error) {
        let errorElement
        switch (key) {
            case "fullName":
                errorElement = fullName
                break;
            case "studentCode":
                errorElement = studentCode
                break;
            case "email":
                errorElement = email
                break;
            case "phone":
                errorElement = phone
                break;
            case "accountLink":
                errorElement = accountLink
                break;
            
            default:
                break;
        }
        if(!errorElement) continue
        const boxElement = getParent(errorElement, '.client-recruit-item')
        boxElement.classList.add('invalid')  
        const spanElement = boxElement.querySelector('span')
        spanElement.innerText = error[key]       
    }
}

const checkFile = (file) => {
    const fileType = file.type.split('/')[0]
    const fileSize = file.size
    
    const maxImage = 1024 * 1024 * 2.5
    const maxVideo = 1024 * 1024 * 50
    const maxFile = 1024 * 1024 * 25

    switch(fileType) {
        case 'video': 
            return fileSize > maxVideo ? ['Video', maxVideo] : true
        case 'image': 
            return fileSize > maxImage ? ['Ảnh', maxImage] : true
        case 'application': 
            return fileSize > maxFile ? ['File', maxFile] : true
    }
}

export { handleApply, errorInformation, checkFile }