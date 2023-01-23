import { StepConfiguration, ComponentsType, ConfigurationOptions, ScreenComponent, IStepFlow } from "./Interfaces";

// enum ComponentsType {
//     Textfield,
//     Input,
//     Button,
//     SingleChoiceOption,
//     Checkbox,
//     Picker,
//     InputValidation,
//     DatePicker
// }

// enum ScreenComponent {
//     welcomeScreen = 'welcomeScreen', 
//     userDetails = 'userDetails'
// }

// // const StepMap: { [key in ScreenComponent]? : JSX.Element } = {
// //     [ScreenComponent.welcomeScreen]: WelcomeScreen
// // }

// // const StepMap: Record<keyof typeof ScreenComponent, any> = {
// //     WelcomeScreen: WelcomeScreen,
// //     UserDetails: UserDetails
// // }

// const StepMap: Record<ScreenComponent, any> = {
//     welcomeScreen: WelcomeScreen,
//     userDetails: UserDetails
// }



// // const StepMap<ScreenComponent: React.Component> = {
// //     [ScreenComponent.welcomeScreen]: WelcomeScreen,
// //     [ScreenComponent.UserDetails]: UserDetails
// //     // Textfield: LabelField, 
// //     // Input: InputBoxLight,
// //     // Button: KYCFlowButton,
// //     // SingleChoiceOption: SingleChoiceOption,
// //     // Checkbox: CheckboxInput,
// //     // Picker: PickerComponent,
// //     // InputValidation: InputValidationField,
// //     // DatePicker: DatePicker
// // }

// enum ConfigurationOptions {
//     Options,
//     Position,
//     Validator,
//     IsSecure,
//     ErrorMessage,
//     HelperMessage
// }

// interface ComponentConfig {
//     id: string;
//     name: string;
//     type: ComponentsType;
//     configuration?: Map<ConfigurationOptions, any>;
// }

// interface StepConfiguration {
//     title: string;
//     subtitle?: string;
//     items: ComponentConfig[];
//     button?: { button: string; className?: string };
//     screen: ScreenComponent
//     nextStep?: StepConfiguration
//     onErrorStep?: StepConfiguration
// }



const userDetailsConfiguration: StepConfiguration = {
    title: "Tell us a bit about yourself",
    items: [
        { id: "firstName_input", name: "First Name", type: ComponentsType.Textfield },
        { id: "firstName", name: "", type: ComponentsType.Input },
        { id: "ssn",
        name: "Social Security Number",
        type: ComponentsType.InputValidation,
        configuration: new Map<ConfigurationOptions, any>([
            // [ConfigurationOptions.HelperMessage, "Data is secured with 256-bit encryption"],
            [ConfigurationOptions.ErrorMessage, "Invalid SSN Format. Should be xxx-xx-xxxx"],
            // [ConfigurationOptions.IsSecure, true],
            [ConfigurationOptions.Validator, (value: string) => {
                return /^\d{3}-\d{2}-\d{4}$/.test(value);
            }]
        ])},
        { id: "middle_input",  name: "Middle Name", type: ComponentsType.Textfield },
        { id: "middleName",  name: "", type: ComponentsType.Input },
        { id: "last_input",  name: "Last Name(s)", type: ComponentsType.Textfield },
        { id: "lastName",  name: "", type: ComponentsType.Input },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
};

const welcomeConfiguration: StepConfiguration = {
    title: "Verify your identity",
    subtitle: "To open your Zoomberry account",
    items: [],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.welcomeScreen,
    nextStep: userDetailsConfiguration
};

const kycCompleted: StepConfiguration = {
    title: "Almost there!",
    subtitle: "Link you bank and add funds to continue.",
    items: [],
    button: { button: "Get Started", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.welcomeScreen
};

const addressConfiguration: StepConfiguration = {
    title: "What is your permanent residential address?",
    subtitle:
    "All fields are mandatory. Please fill them in to move to the next step.",
    items: [
        { id: "street_input", name: "Street Address", type: ComponentsType.Textfield },
        { id: "street", name: "", type: ComponentsType.Input },
        { id: "unit_label", name: "Unit", type: ComponentsType.Textfield },
        { id: "unit", name: "", type: ComponentsType.Input },
        { id: "state_field", name: "State", type: ComponentsType.Textfield },
        { id: "state", name: "state", type: ComponentsType.Input },
        { id: "zip_field", name: "ZIP", type: ComponentsType.Textfield },
        { id: "zip", name: "zip", type: ComponentsType.Input },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
};

const citizenConfiguration: StepConfiguration = {
    title: "Are you a citizen of the United States?",
    subtitle: "Ola is required by law to collect this information.",
    items: [
        { id: "usCitize", name: "Yes", type: ComponentsType.SingleChoiceOption },
        { 
            id: "greenCard",
            name: "I'm a Green Card holder",
            type: ComponentsType.SingleChoiceOption,
        },
        { id: "visa", name: "I have a Visa", type: ComponentsType.SingleChoiceOption },
        { id: "international", name: "No", type: ComponentsType.SingleChoiceOption },
    ],
    screen: ScreenComponent.userDetails
};

const noAvailableConfiguration: StepConfiguration = {
    title: "We are sorry!",
    subtitle:
    "Zoomberry is not currently available for non US residents. Join the Waitlist and we will contact you as soon anything changes.",
    items: [],
    button: { button: "Get Started", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
};

const fundingSourcesConfiguration: StepConfiguration = {
    title: "What are your funding sources?",
    subtitle: "Ola is required by law to collect this information.",
    items: [
        { id: "", name: "Employment income", type: ComponentsType.Checkbox },
        { id: "", name: "Investments", type: ComponentsType.Checkbox },
        { id: "", name: "Inheritance", type: ComponentsType.Checkbox },
        { id: "", name: "Family", type: ComponentsType.Checkbox },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
};

const listCountries = ["Spain", "USA", "Venezuela", "France", "Belgium"];

let configuration = new Map<ConfigurationOptions, any>();
configuration.set(ConfigurationOptions.Options, listCountries);

const countrySelectorConfiguration: StepConfiguration = {
    title: "What is your citizenship?",
    subtitle:
    "All fields are mandatory. Please fill them in to move to the next step.",
    items: [
        {
            id: "country",
            name: "Country",
            type: ComponentsType.Textfield,
        },
        {
            id: "country",
            name: "",
            type: ComponentsType.Picker,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.Options, listCountries],
            ]),
        },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
};


const ssnInputConfiguration: StepConfiguration = {
    title: "Enter your Social Security Number",
    subtitle:
    "Federal regulations require us to verify your Social Security Number or ITIN. This will not impact your credit score.",
    items: [
        {
            id: "ssn",
            name: "Social Security Number",
            type: ComponentsType.InputValidation,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.HelperMessage, "Data is secured with 256-bit encryption"],
                [ConfigurationOptions.ErrorMessage, "Invalid SSN Format. Should be xxx-xx-xxxx"],
                [ConfigurationOptions.IsSecure, true],
                [ConfigurationOptions.Validator, (value: string) => {
                    return /^\d{3}-\d{2}-\d{4}$/.test(value);
                }]
            ]),
        },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
};

const birthConfiguration: StepConfiguration = {
    title: "What is your date of Birth?",
    subtitle:
    "This should match your ID. Required to be 18 years or older. ",
    items: [
        {
            id: "dateBirth",
            name: "Date of Birth",
            type: ComponentsType.DatePicker,
            configuration: new Map<ConfigurationOptions, any>([
                [ConfigurationOptions.HelperMessage, "Data is secured with 256-bit encryption"],
                [ConfigurationOptions.ErrorMessage, "Invalid SSN Format. Should be xxx-xx-xxxx"],
                [ConfigurationOptions.Validator, (value: string) => {
                    return /^\d{3}-\d{2}-\d{4}$/.test(value);
                }]
            ]),
        },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails
}





let flow = new Map<StepConfiguration, IStepFlow>();
flow.set(welcomeConfiguration, {
    nextStep: userDetailsConfiguration,
    onError: noAvailableConfiguration,
    prevStep: undefined
})

flow.set(userDetailsConfiguration, {
        nextStep: addressConfiguration,
        onError: noAvailableConfiguration,
        prevStep: undefined,
        condition: "this.state.firstName.length > 0"
    })

// flow.set(welcomeConfiguration, {
//         nextStep: userDetailsConfiguration,
//         onError: noAvailableConfiguration,
//         prevStep: undefined
//     })

// flow.set(welcomeConfiguration, {
//         nextStep: userDetailsConfiguration,
//         onError: noAvailableConfiguration,
//         prevStep: undefined
//     })


export {
    welcomeConfiguration,
    userDetailsConfiguration,
    addressConfiguration,
    birthConfiguration, 
    citizenConfiguration,
    noAvailableConfiguration,
    fundingSourcesConfiguration,
    countrySelectorConfiguration,
    kycCompleted,
    ssnInputConfiguration,
    flow
};






