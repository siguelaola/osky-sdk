import { StepConfiguration, ScreenComponent, IStepFlow, ComponentsType, ConfigurationOptions } from "../components/Interfaces";

const aboutYou: StepConfiguration = {
    title: "Tell us about you",
    items: [
        { id: "firstName_field", name: "First Name", type: ComponentsType.Textfield },
        { id: "firstName", name: "", type: ComponentsType.Input },
        { id: "lastName_field",  name: "Last Name", type: ComponentsType.Textfield },
        { id: "lastName",  name: "", type: ComponentsType.Input }
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

const aboutCompany: StepConfiguration = {
    title: "Tell us about your company",
    items: [
        { id: "legalName_field", name: "Legal Name", type: ComponentsType.Textfield },
        { id: "legalName", name: "", type: ComponentsType.Input },
        {
            id: "typeOfBusiness_field",
            name: "Type of Business",
            type: ComponentsType.Textfield,
        },
        {
            id: "typeOfBusiness",
            name: "",
            type: ComponentsType.Picker,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "Check", "Casher", "Convenience", "Store", "Ethnic", "Grocery", "Liquor", "Store",
                    "Multi Service", "Pharmacy", "Port", "Other (not ready to write)", "Biller (Receiving Payments)"
                ]],
            ]),
        },
        { id: "business_number_field", name: "Business Phone Number", type: ComponentsType.Textfield },
        { id: "business_number", name: "", type: ComponentsType.Input },
        { id: "business_email_field", name: "Business Email Address", type: ComponentsType.Textfield },
        { id: "business_email", name: "", type: ComponentsType.Input }
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

const addressCompany: StepConfiguration = {
    title: "Business Address",
    items: [
        { id: "street_input", name: "Street Address", type: ComponentsType.Textfield },
        { id: "street", name: "", type: ComponentsType.Input },
        { id: "unit_label", name: "Unit", type: ComponentsType.Textfield },
        { id: "unit", name: "", type: ComponentsType.Input },
        { id: "state_field", name: "State", type: ComponentsType.Textfield },
        { id: "state", name: "state", type: ComponentsType.Input },
        { id: "zip_field", name: "ZIP", type: ComponentsType.Textfield },
        { id: "zip", name: "zip", type: ComponentsType.Input }
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

const products: StepConfiguration = {
    title: "Which of the below products do you plan to offer to consumers?",
    items: [
        { id: "1", name: "Money Transfer - Sends Only", type: ComponentsType.Checkbox },
        { id: "2", name: "Money Transfer - Sends and Receives", type: ComponentsType.Checkbox },
        { id: "3", name: "ExpressPayment®", type: ComponentsType.Checkbox },
        { id: "4", name: "All MoneyGram products", type: ComponentsType.Checkbox },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

const screening: StepConfiguration = {
    title: "",
    items: [
        { 
            id: "transfer_services", 
            name: "Do you currently provide money transfer services?", 
            type: ComponentsType.ToggleOption,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "Yes", "No"
                ]]
            ])
        },        { 
            id: "past_services", 
            name: "Have you provided money transfer services in the past?", 
            type: ComponentsType.ToggleOption,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "Yes", "No"
                ]]
            ])
        },        { 
            id: "past_declined", 
            name: "Have you been declined as a MoneyGram agent in the past or had MoneyGram services cancelled?", 
            type: ComponentsType.ToggleOption,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "Yes", "No"
                ]]
            ])
        }
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

const businessDetails: StepConfiguration = {
    title: "",
    items: [
        { id: "language_field", name: "What is the preferred language for your consumer base", type: ComponentsType.Textfield },
        {
            id: "preferredLanguage",
            name: "Select a language",
            type: ComponentsType.Picker,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "English", "Spanish", "French", "Other"
                ]],
            ]),
        },
        { id: "monthly_transfer_field", name: "What do you anticipate will be your normal monthly volume for money transfer sends?", type: ComponentsType.Textfield },
        {
            id: "monthlyTransfer",
            name: "Select an option",
            type: ComponentsType.Picker,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "1 - 50 items", "51 - 250 items", "251-1,000 items", "Over 1,000 items"
                ]],
            ]),
        },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

const survey: StepConfiguration = {
    title: "Rate us",
    items: [
        { id: "legalName_field", name: "Rate us", type: ComponentsType.Textfield },
        {
            id: "rate1",
            name: "",
            type: ComponentsType.Picker,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, [
                    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
                ]],
            ]),
        },
        { id: "business_number_field", name: "Comments", type: ComponentsType.Textfield },
        { id: "business_number", name: "", type: ComponentsType.Input }
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}

let flow = new Map<StepConfiguration, IStepFlow>();
flow.set(aboutYou, { 
    nextStep: aboutCompany }
)

flow.set(aboutCompany, {
    nextStep: addressCompany
})

flow.set(addressCompany, {
    nextStep: products
})

flow.set(products, {
    nextStep: screening
})

flow.set(screening, {
    nextStep: businessDetails
})

flow.set(businessDetails, {
    nextStep: survey
})

export {
    flow
}