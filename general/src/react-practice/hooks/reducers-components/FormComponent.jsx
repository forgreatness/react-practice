import React, { useReducer } from 'react';

const initialFormState = {
    email: "",
    name: "",
    message: ""
};

const ContactFormReducer = (prevState, contactFormAction) => {
    switch(contactFormAction) {
        case "updateFormControl":
            let newFormState = {
                ...prevState,
                [contactFormAction.controlName]: contactFormAction.controlValue
            };
        
            return newFormState;
        case "submitForm":
            // api call
            // reset value
            return initialFormState;
        default:
            throw "this seems to be a very unfamilar contact form action";
    }
};

function ContactFormComponent() {
    const [contactFormState, contactFormEventDispatcher] = useReducer(ContactFormReducer, initialFormState);

    const handleContactFormSubmit = (e) => {
        e.preventDefault(); // will prevent the element from propagating up to other element which means we have already handle it here not need to handle again

        let contactFormSubmitAction = {
            type: 'submitForm'
        };

        contactFormEventDispatcher(contactFormSubmitAction);
    }

    const handleContactFormInput = (e) => {
        e.preventDefault();

        let contactFormAction = {
            type: 'updateFormControl',
            controlName: e.target.name,
            controlValue: e.target.value
        };

        contactFormEventDispatcher(contactFormAction);
    }

    return (
        <form onSubmit={handleContactFormSubmit}>
            <input name="name" onChange={handleContactFormInput} value={contactFormState?.name ?? ""} placeholder='Enter your name here' />
            <input name="email" onChange={handleContactFormInput} value={contactFormState?.email ?? ""} placeholder='Enter your email here' />
            <textarea name="message" onChange={handleContactFormInput} value={contactFormState?.message ?? ""} placeholder='Leave a thought behind' />
            <button type='submit'>Send</button>
        </form>
    );
}

export { ContactFormComponent }