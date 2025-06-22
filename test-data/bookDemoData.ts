interface demoData{
    placeholder: string,
    text: string
}

export const getDemoData = ():demoData[] => {
    
    const demoData = 
    [
        {
            "placeholder": "First name*",
            "text": "Test"
        },
        {
            "placeholder": "Last name*",
            "text": "Test"
        },
        {
            "placeholder": "Professional Email*",
            "text": "test@user11.com"
        },
        {
            "placeholder": "Phone number*",
            "text": "1-512-608-5588"
        },
        {
            "placeholder": "Job Title*",
            "text": "Test user"
        },
        {
            "placeholder": "Message:",
            "text": "Test message"
        }
    ] as demoData[];
    return demoData
} 