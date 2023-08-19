const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Contructor function
function Validator(option) {

    function getParent(element, selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector))
                return element.parentElement
            
            element = element.parentElement
        }
    }
    
    var selectorRules = {}

    // The function that does the validation
    function validate(inputElement, rule) {
        //value: inputElement.value
        //test: rule.test
        // var errorElement = inputElement.parentElement.querySelector(option.errorSelector) 
        var errorElement = getParent(inputElement, option.formGroupSelector).querySelector(option.errorSelector) 
        var errorMessage;

        // Get rules of selector
        var rules = selectorRules[rule.selector]
        
        // Loop each rule and validate the value by rule
        // In the case of error, break the loop
        if(rules)
            for (var i = 0; i < rules.length; i++)
            {
                errorMessage = rules[i](inputElement.value)
                if(errorMessage)
                    break
            }

        if(errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, option.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, option.formGroupSelector).classList.remove('invalid')
        }
        
        return !errorMessage
    }

    const checkError = () => {
        var isFormValid = true
        // Loop through each rule and validate in any case
        option.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement) {
                if(inputElement)
                var isValid = validate(inputElement, rule)
                
                if(!isValid || inputElement.value == '')
                    isFormValid = false
            }
        })

        return isFormValid
    }

    var formElement = $(option.form)

    if(formElement) {
        if(checkError())
        {  
            if(typeof(option.setIsSubmit) == 'function')
                option.setIsSubmit(true)
        }
        else 
            if(typeof(option.setIsSubmit) == 'function')
                option.setIsSubmit(false)
 
        // Loop through each rule and listen event for handling
        option.rules.forEach(rule => {
            var inputElement = formElement.querySelector(rule.selector)
            
            // Save the rule for each element
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            if(inputElement) {
                // Handling the case when blur out inputElement
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }

                // Handling the case when user fill the value in inputElement
                inputElement.oninput = () => {
                    const parentElement = getParent(inputElement, option.formGroupSelector)
                    var errorElement = parentElement.querySelector(option.errorSelector) 
                    errorElement.innerText = ''
                    parentElement.classList.remove('invalid')
                }
            }
        })

        const submitButton = $(option.submitButton)
        if(submitButton) {
            submitButton.onclick = e => {
                e.preventDefault()
                if(checkError()) {
                    if(typeof(option.action) == "function") {
                        option.action()
                    }
                }
            }
        }
    }
}

// Define rules
// Principals of rule
// 1. Khi có lỗi thì trả về message lỗi
// 2. Khi không có lỗi thì trả về undefines
Validator.isRequired = (selector, message) => {
    return {
        selector,
        test(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = (selector, message) => {
    return {
        selector,
        test(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = (selector, min, message) => {
    return {
        selector,
        test(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập mật khẩu ít nhất ${min} ký tự`
        }
    }
}

Validator.isPhoneNumber = (selector, message) => {
    return {
        selector,
        test(value) {
            var regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
            return regex.test(value) ? undefined : message || `Vui lòng nhập đúng số điện thoại`
        }
    }
}

Validator.isPassword = (selector, message) => {
    return {
        selector,
        test(value) {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/
            return regex.test(value)
            ? undefined
            : message || 'Mật khẩu ký tự in hoa, ký tự đặc biệt và số'
        }
    }
}

Validator.isConfirm = (selector, rawSelector, message) => {
    return {
        selector,
        test(value) {
            const rawValue = $(rawSelector).value
            return value === rawValue ? undefined : message || 'Hãy nhập lại đúng mật khẩu'
        }
    }
}

// Validator({
//     form: '#comment-form',
//     formGroupSelector: '.form-group',
//     errorSelector: '.form-message',
//     rules: [
//         Validator.isRequired('#comment-name', 'Please fill your full name'),
//         Validator.isRequired('#comment-email', 'Please fill your email'),
//         Validator.isEmail('#comment-email', 'Please fill correct email'),
//         Validator.isRequired('#comment-phone'),
//         Validator.minLength('#comment-phone', 10, "Please fill the correct phone number"),
//         Validator.isPhoneNumber('#comment-phone', "Sai tề"),
//         Validator.isRequired('#comment-text'),
//     ],
//     onSubmit(data) {
//         console.log(data)
//     }
// });

export default Validator