import {
  StepConfiguration,
  ScreenComponent,
  IStepFlow,
  ComponentsType,
  ConfigurationOptions,
} from "../components/Interfaces";

const login: StepConfiguration = {
  title: "",
  items: [
    {
      id: "login_id",
      name: "Email",
      type: ComponentsType.InputValidation,
      configuration: new Map<ConfigurationOptions, any>([
        [ConfigurationOptions.HelperMessage, ""],
        [
          ConfigurationOptions.ErrorMessage,
          "Invalid email. Should be xxx@xxx.xxx",
        ],
        [ConfigurationOptions.IsSecure, true],
        [
          ConfigurationOptions.Validator,
          (value: string) => {
            return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
          },
        ],
      ]),
    },
    {
      id: "password_id",
      name: "Password",
      type: ComponentsType.InputValidation,
      configuration: new Map<ConfigurationOptions, any>([
        [ConfigurationOptions.HelperMessage, ""],
        [
          ConfigurationOptions.ErrorMessage,
          "Password must be at least 8 characters and contain a number an a symbol",
        ],
        [ConfigurationOptions.IsSecure, true],
        [
          ConfigurationOptions.Validator,
          (value: string) => {
            return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
              value
            );
          },
        ],
      ]),
    },
  ],
  button: { button: "Login", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const welcome: StepConfiguration = {
    title: "Welcome!",
    items: [
        { id: "text1", name: "Get an edge over your competition and increase store traffic with our transfer services, payment services, and money orders.", type: ComponentsType.Textfield },
        { id: "img1", name: "intro-image.png", type: ComponentsType.Image },
        { id: "text2", name: "Interested? Fill out the following form, and we will contact you directly. Please note that your business must currently be open to the public to be considered.", type: ComponentsType.Textfield },
    ],
    button: { button: "Continue", className: "button-light-mode-instance-1" },
    screen: ScreenComponent.userDetails,
}

const aboutYou: StepConfiguration = {
  title: "Tell us about you",
  items: [
    {
      id: "firstName_field",
      name: "First Name",
      type: ComponentsType.Textfield,
    },
    { id: "firstName", name: "", type: ComponentsType.Input },
    { id: "lastName_field", name: "Last Name", type: ComponentsType.Textfield },
    { id: "lastName", name: "", type: ComponentsType.Input },
  ],
  button: { button: "Continue", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const aboutCompany: StepConfiguration = {
  title: "Tell us about your company",
  items: [
    {
      id: "legalName_field",
      name: "Legal Name",
      type: ComponentsType.Textfield,
    },
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
        [
          ConfigurationOptions.Options,
          [
            "Check",
            "Casher",
            "Convenience",
            "Store",
            "Ethnic",
            "Grocery",
            "Liquor",
            "Store",
            "Multi Service",
            "Pharmacy",
            "Port",
            "Biller (Receiving Payments)",
          ],
        ],
      ]),
    },
    {
      id: "business_number_field",
      name: "Business Phone Number",
      type: ComponentsType.Textfield,
    },
    { id: "business_number", name: "", type: ComponentsType.Input },
    {
      id: "business_email_field",
      name: "Business Email Address",
      type: ComponentsType.Textfield,
    },
    { id: "business_email", name: "", type: ComponentsType.Input },
    {
      id: "street_input",
      name: "Street Address",
      type: ComponentsType.Textfield,
    },
    { id: "street", name: "", type: ComponentsType.Input },
    { id: "unit_label", name: "City", type: ComponentsType.Textfield },
    { id: "city", name: "", type: ComponentsType.Input },
    { id: "zip_field", name: "ZIP", type: ComponentsType.Textfield },
    { id: "zip", name: "zip", type: ComponentsType.Input },
    { id: "country_field", name: "Country", type: ComponentsType.Textfield },
    {
      id: "country",
      name: "Select a country",
      type: ComponentsType.Picker,
      configuration: new Map<ConfigurationOptions, any>([
        [
          ConfigurationOptions.Options,
          ["United States", "Australia", "Spain", "Belgium", "France"],
        ],
      ]),
    },
  ],
  button: { button: "Continue", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const addressCompany: StepConfiguration = {
  title: "Business Address",
  items: [
    {
      id: "street_input",
      name: "Street Address",
      type: ComponentsType.Textfield,
    },
    { id: "street", name: "", type: ComponentsType.Input },
    { id: "unit_label", name: "Unit", type: ComponentsType.Textfield },
    { id: "unit", name: "", type: ComponentsType.Input },
    { id: "state_field", name: "State", type: ComponentsType.Textfield },
    { id: "state", name: "state", type: ComponentsType.Input },
    { id: "zip_field", name: "ZIP", type: ComponentsType.Textfield },
    { id: "zip", name: "zip", type: ComponentsType.Input },
  ],
  button: { button: "Continue", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const products: StepConfiguration = {
  title: "About Your Products",
  // items: [
  //     { id: "1", name: "Money Transfer - Sends Only", type: ComponentsType.Checkbox },
  //     { id: "2", name: "Money Transfer - Sends and Receives", type: ComponentsType.Checkbox },
  //     { id: "3", name: "ExpressPayment®", type: ComponentsType.Checkbox },
  //     { id: "4", name: "All MoneyGram products", type: ComponentsType.Checkbox },
  // ],
  items: [
    {
      id: "products_input",
      name: "Which of the below products do you plan to offer to consumers?",
      type: ComponentsType.Textfield,
    },
    {
      id: "country",
      name: "Select an option",
      type: ComponentsType.Picker,
      configuration: new Map<ConfigurationOptions, any>([
        [
          ConfigurationOptions.Options,
          [
            "Money Transfer - Sends Only",
            "Money Transfer - Sends and Receives",
            "ExpressPayment®",
            "All MoneyGram products",
          ],
        ],
      ]),
    },
  ],
  button: { button: "Continue", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const screening: StepConfiguration = {
  title: "A few more questions",
  items: [
    {
      id: "transfer_services",
      name: "Do you currently provide money transfer services?",
      type: ComponentsType.ToggleOption,
      configuration: new Map<ConfigurationOptions, any>([
        [ConfigurationOptions.Options, ["Yes", "No"]],
      ]),
    },
    {
      id: "past_services",
      name: "Have you provided money transfer services in the past?",
      type: ComponentsType.ToggleOption,
      configuration: new Map<ConfigurationOptions, any>([
        [ConfigurationOptions.Options, ["Yes", "No"]],
      ]),
    },
    {
      id: "past_declined",
      name: "Have you been declined as a MoneyGram agent in the past or had MoneyGram services cancelled?",
      type: ComponentsType.ToggleOption,
      configuration: new Map<ConfigurationOptions, any>([
        [ConfigurationOptions.Options, ["Yes", "No"]],
      ]),
    },
  ],
  button: { button: "Continue", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const businessDetails: StepConfiguration = {
  title: "",
  items: [
    {
      id: "language_field",
      name: "What is the preferred language for your consumer base",
      type: ComponentsType.Textfield,
    },
    {
      id: "preferredLanguage",
      name: "Select a language",
      type: ComponentsType.Picker,
      configuration: new Map<ConfigurationOptions, any>([
        [
          ConfigurationOptions.Options,
          ["English", "Spanish", "French", "Other"],
        ],
      ]),
    },
    {
      id: "monthly_transfer_field",
      name: "What do you anticipate will be your normal monthly volume for money transfer sends?",
      type: ComponentsType.Textfield,
    },
    {
      id: "monthlyTransfer",
      name: "Select an option",
      type: ComponentsType.Picker,
      configuration: new Map<ConfigurationOptions, any>([
        [
          ConfigurationOptions.Options,
          [
            "1 - 50 items",
            "51 - 250 items",
            "251-1,000 items",
            "Over 1,000 items",
          ],
        ],
      ]),
    },
    {
      id: "business_number_field",
      name: "Total # of Locations",
      type: ComponentsType.Textfield,
    },
    { id: "business_number", name: "", type: ComponentsType.Input },
  ],
  button: { button: "Submit", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const survey: StepConfiguration = {
  title: "Please let us know",
  items: [
    {
      id: "legalName_field",
      name: "How do you rate us?",
      type: ComponentsType.Textfield,
    },
    {
      id: "rate1",
      name: "",
      type: ComponentsType.Picker,
      configuration: new Map<ConfigurationOptions, any>([
        [
          ConfigurationOptions.Options,
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        ],
      ]),
    },
    {
      id: "find_field",
      name: "How did you find us?",
      type: ComponentsType.Textfield,
    },
    {
      id: "find",
      name: "",
      type: ComponentsType.Picker,
      configuration: new Map<ConfigurationOptions, any>([
        [
          ConfigurationOptions.Options,
          ["Internet", "Friend", "Ads", "Using our service", "Other"],
        ],
      ]),
    },
  ],
  button: { button: "Complete", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const uploadDocument: StepConfiguration = {
  title: "Please, upload the following documents",
  items: [
    {
      id: "upload_document_field",
      name: "Proof of address",
      type: ComponentsType.Textfield,
    },
    { id: "upload_document", name: "", type: ComponentsType.UploadFiles },
  ],
  button: { button: "Continue", className: "button-light-mode-instance-1" },
  screen: ScreenComponent.userDetails,
};

const applicationRejected: StepConfiguration = {
  title: "Application unsuccessful",
  items: [
    {
      id: "image",
      name: "rejected.png",
      type: ComponentsType.Image,
    },
    {
      id: "title",
      name: "We're sorry, but your business is not eligible to be a Moneygram agent at this time. Do not hesitate to re-apply in the future.",
      type: ComponentsType.Textfield,
    },
  ],
  screen: ScreenComponent.userDetails,
};

let flow = new Map<StepConfiguration, IStepFlow>();
// flow.set(login, {
//   nextStep: aboutYou,
// });


// flow.set(screening, {
//     nextStep: aboutCompany,
//   });

flow.set(welcome, {
    nextStep: aboutYou
})

flow.set(aboutYou, {
    nextStep: aboutCompany,
  });

flow.set(aboutCompany, {
  nextStep: uploadDocument,
  // condition: "this.state.country !== \"United States\"",
  // onError: uploadDocument
});

flow.set(uploadDocument, {
  nextStep: products,
});

// flow.set(addressCompany, {
//     nextStep: products
// })

flow.set(products, {
  nextStep: screening,
});

flow.set(screening, {
  nextStep: businessDetails,
  condition:
    "!(this.state.past_declined || this.state.past_services || this.state.transfer_services)",
  onError: applicationRejected,
});

flow.set(businessDetails, {
  // nextStep: survey
});

export { flow };
