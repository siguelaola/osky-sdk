import * as React from "react";
import LabelField from "./old/LabelField";
import InputBoxLight from "./old/InputBoxLight";
import KYCFlowButton from "./KYCFlowButton";
import SingleChoiceOption from "./SingleChoiceOption";
import CheckboxInput from "./CheckboxInput";

import {
  ComponentConfig,
  ComponentsType,
  StepConfiguration,
  ConfigurationOptions,
} from "./Interfaces";

import Line from "./Line";
import "./KYCStep.css";
import PickerComponent from "./PickerComponent";
import InputValidationField from "./InputValidationField";
import DatePicker from "./DatePicker";
import ToggleOption from "./ToggleOption";
import ReactDOM from "react-dom";
import FileUploadMultiple from "./FileUploadMultiple";

interface IOnboardingData {
  step: number;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: String;
  country: string;
  levelOfEducation: string;
}

interface ValidationData {
  //   value: string;
}

class KYCStep extends React.Component<
  {
    configuration: StepConfiguration;
    values: IOnboardingData;
    // handleChange: (input: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (key: string, value: string) => void;
    nextStep: () => void;
  },
  ValidationData
> {
  state: ValidationData = {};

  validation: { [key: string]: any } = {};

  //   componentDidMount(): void {
  //     console.log("did mount")
  //     this.props.configuration.items.forEach((item: ComponentConfig) => {
  //         this.setState((prevState) => {
  //           return { ...prevState, [item.id]: false };
  //         });
  //       })
  //   }

  nextStep = () => {
    this.setState({});
    this.props.nextStep();
  };

  renderSwitch(item: ComponentConfig, key: number) {
    switch (item.type) {
      case ComponentsType.Textfield:
        return <LabelField className={""} label={item.name} key={key} />;
      case ComponentsType.Input:
        this.validation[item.id] = false;

        return (
          <InputBoxLight
            key={item.id}
            id={item.id}
            className={"input-default"}
            valueDidChange={(key, value) => {
              this.inputChange(key, value);
            }}
            // valueDidChange={this.inputChange}
            // handleChange={this.inputChange}
            // handleChange={this.onChange}
            // handleChange={this.props.handleChange}
            placeholder={""}
          />
        );
      case ComponentsType.InputValidation:
        return (
          <InputValidationField
            key={item.id}
            name={item.name}
            isSecure={item.configuration?.get(ConfigurationOptions.IsSecure)}
            auxiliarMessage={item.configuration?.get(
              ConfigurationOptions.HelperMessage
            )}
            onChange={(value: string, isValid: boolean) => {
              this.inputChange(item.id, value, isValid);
            }}
            validator={item.configuration?.get(ConfigurationOptions.Validator)}
            errorMessage={item.configuration?.get(
              ConfigurationOptions.ErrorMessage
            )}
          />
        );
      case ComponentsType.Button:
        return (
          <KYCFlowButton
            key={item.id}
            className="button-light-mode-instance-1"
            text={item.name}
            onClick={this.nextStep}
          />
        );
      case ComponentsType.SingleChoiceOption:
        return (
          <div
            key={item.id + "_div"}
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
          >
            <SingleChoiceOption
              key={item.id + "_option"}
              title={item.name}
              onClick={this.nextStep}
            />
            <Line key={item.id} color={"#F2F2F7"} height={1} />
          </div>
        );
      case ComponentsType.Checkbox:
        let labelPosition: "left" | "right";
        switch (item.configuration?.get(ConfigurationOptions.Position)) {
          case "left":
            labelPosition = "left";
            break;
          case "right":
            labelPosition = "right";
            break;
          default:
            labelPosition = "left";
            break;
        }

        return (
          <CheckboxInput
            key={item.id}
            title={item.name}
            labelPosition={labelPosition}
          />
        );
      case ComponentsType.Picker:
        const options = item.configuration?.get(ConfigurationOptions.Options);

        return (
          <PickerComponent
            key={item.id}
            options={options}
            placeholder={item.name}
            onChange={(value: string, isValid: boolean) => {
              this.inputChange(item.id, value, isValid);
            }}
          />
        );
      case ComponentsType.DatePicker:
        // const [start, setStart] = useState<Date>(new Date());
        // const [end, setEnd] = useState<Date>(new Date());

        const handleDateChange = (startDate: string, endDate: string) => {
          // const handleDateChange = (startDate: Date, endDate: Date) => {
          console.log("Start: ", startDate, " - endDate: ", endDate);
          //   setStart(startDate);
          //   setEnd(endDate);
        };

        return (
          <DatePicker
            key={item.id}
            name="Birth Date"
            startDate={new Date().toString()}
            endDate={new Date().toString()}
            onChange={handleDateChange}
          />
        );
      case ComponentsType.ToggleOption:
        return (
          <ToggleOption
            key={item.id}
            id={item.id}
            title={item.name}
            options={item.configuration?.get(ConfigurationOptions.Options)}
            onChange={(key: string, value: boolean) => {
              this.inputChange(key, value);
            }}
          />
        );
      case ComponentsType.UploadFiles:
        return (
            <FileUploadMultiple key={item.id} />
        );
      case ComponentsType.Image:
        return <img key={item.name} className="center" style={{padding: "4vh"}} src={require(`../assets/${item.name}`)} alt={item.name} />;
    }
  }

  isValid = () => {};

  inputChange = (key: string, value: any, isValid: boolean = true) => {
    this.props.handleChange(key, value);

    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: isValid,
      };
    });
  };

  continue = () => {};

  onChange = (value: string) => {
    console.log("Updated: ", value);
  };

  render() {
    const { title, subtitle, items } = this.props.configuration;
    return (
      <div className="step-container">
        <span className="kyc-title">{title}</span>
        {
          <>
            {subtitle !== null && (
              <span className="kyc-subtitle">{subtitle}</span>
            )}
          </>
        }

        {/* <form> */}
        {items.map((item, index) => this.renderSwitch(item, index))}
        {/* </form> */}

        <>
          {this.props.configuration.button !== undefined && (
            <KYCFlowButton
              className="button-light-mode-instance-1"
              text={this.props.configuration.button.button}
              onClick={this.nextStep}
            />
          )}
        </>
      </div>
    );
  }
}

export default KYCStep;
