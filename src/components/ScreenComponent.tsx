import * as React from "react";
import {
  BlockData,
  NodeScreen,
  BlockType,
  BlockDataType,
} from "../interfaces/types";
import CheckboxComponent from "./CheckboxComponent";
import ImageComponent from "./ImageComponent";
import InputComponent from "./InputComponent";
import PickerComponent from "./PickerComponent";
import SingleChoiceOption from "./SingleChoiceOption";
import TextComponent from "./TextComponent";
import ToggleOption from "./ToggleOption";
import VideoComponent from "./VideoComponent";

import "./css/ScreenComponent.css";
import ButtonComponent from "./ButtonComponent";
import LineComponent from "./LineComponent";
import DateComponent from "./DateComponent";
import PhoneComponent from "./PhoneComponent";
import AddressComponent from "./AddressComponent";

export interface ScreenComponentProps {
  node: NodeScreen;
  values?: {}
  handleChange: (key: string, value: string) => void;
  nextStep: (data: { [key: string]: any }) => void;
}

export type ComponentProps = {
  id: string;
  data: BlockDataType;
  value?: string
  onChange: (id: string, value: any, valid: boolean) => void;
};

interface KYCStepState {
  blockData: Record<string, any>;
  canContinue: boolean;
}

class ScreenComponent extends React.Component<ScreenComponentProps, KYCStepState> {
  constructor(props: ScreenComponentProps) {
    super(props);
    this.state = {
      blockData: this.props.values ?? {},
      canContinue: true,
    };
  }

  components: {
    [key in BlockType]:
      | React.FC<ComponentProps>
      | React.ComponentType<ComponentProps>;
  } = {
      date: DateComponent,
    image: ImageComponent,
    video: VideoComponent,
    input: InputComponent,
    header: TextComponent,
    picker: PickerComponent,
    paragraph: TextComponent,
    separator: LineComponent,
    toggleOption: ToggleOption,
    checklist: CheckboxComponent,
    phone: PhoneComponent,
    
    // list: LabelField,
    // clickableOption: LabelField,

    address: AddressComponent,
  };

  nextStep = () => {
    if (this.state.canContinue) {
      this.setState({});

      const data = Object.entries(this.state.blockData).reduce(
        (acc, [id, { value }]) => ({ ...acc, [id]: value }),
        {}
      );
      this.props.nextStep(data);
    }
  };

  renderBlock = (block: BlockData) => {
    const BlockComponent = this.components[block.type];
    if (BlockComponent) {
      const blockData = block.data;
      return (
        <BlockComponent
          key={block.id}
          id={block.id}
          data={blockData}
          value={this.state.blockData[block.id]}
          onChange={(id: string, value: any, isValid: boolean) => {
            this.handleBlockDataChange(id, value, isValid);
          }}
          //   onClick={this.nextStep}
        />
      );
    }
    return null;
  };

  handleBlockDataChange = (blockId: string, value: any, isValid: boolean) => {
    this.setState(
      (prevState) => ({
        blockData: {
          ...prevState.blockData,
          [blockId]: { value, isValid },
        },
      }),
      () => {
        let canContinue = true;
        Object.entries(this.state.blockData).forEach(([, value]) => {
          canContinue = canContinue && value.isValid;
        });
        this.setState({ canContinue: canContinue });
      }
    );
  };

  render() {
    const { node } = this.props;
    const { blocks } = node.data;

    return (
      <div className="step-container">
        {blocks && blocks.map((block) => this.renderBlock(block))}

        <ButtonComponent
          enabled={this.state.canContinue}
          onClick={this.nextStep}
        />
        <br />
      </div>
    );
  }
}

export default ScreenComponent;
