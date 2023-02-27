import UserDetails from "./UserDetails";
import WelcomeScreen from "./WelcomeScreen";

enum ComponentsType {
    Textfield,
    Input,
    Button,
    SingleChoiceOption,
    Checkbox,
    Picker,
    InputValidation,
    DatePicker,
    ToggleOption, 
    UploadFiles,
    Image,
    Video
}

enum ScreenComponent {
    welcomeScreen = 'welcomeScreen', 
    userDetails = 'userDetails'
}

enum ConfigurationOptions {
    Options,
    Position,
    ValidatorType,
    ValidationCustom,
    IsSecure,
    ErrorMessage,
    HelperMessage,
    URL, 
    Border, 
    Background, 
    Stretched, 
    Caption
}

interface ComponentConfig {
    id: string;
    name: string;
    type: ComponentsType;
    configuration?: Map<ConfigurationOptions, any>;
}

interface StepConfiguration {
    title: string;
    subtitle?: string;
    items: ComponentConfig[];
    button?: { button: string; className?: string };
    screen: ScreenComponent
    nextStep?: StepConfiguration
    onErrorStep?: StepConfiguration
}


interface IStepFlow {
    nextStep?: StepConfiguration
    onError?: StepConfiguration
    prevStep?: StepConfiguration
    condition?: string
}

const StepMap: Record<ScreenComponent, any> = {
    welcomeScreen: WelcomeScreen,
    userDetails: UserDetails
}


export {
    StepMap,
    ScreenComponent,
    ComponentsType,
    ConfigurationOptions
};

export type { StepConfiguration, ComponentConfig, IStepFlow };
