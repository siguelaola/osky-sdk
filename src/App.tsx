import './App.css';
import Overlay from './components/Overlay';
import { ComponentsType } from "./components/Models";

const configuration = {
    title: "Tell us a bit about yourself",
    items: [
        { name: "First Name", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input},
        { name: "Middle Name", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input},
        { name: "Last Name(s)", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input}
    ],
    button: { typeButtonLabelBig: { button: "Continue" }, className: "button-light-mode-instance-1" }
}

const address_configuration = {
    title: "What is your permanent residential address?",
    subtitle: "All fields are mandatory. Please fill them in to move to the next step.",
    items: [
        { name: "Street Address", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input},
        { name: "Unit", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input},
        { name: "State", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input},
        { name: "ZIP", type: ComponentsType.Textfield}, { name: "", type: ComponentsType.Input}
    ],
    button: { typeButtonLabelBig: { button: "Continue" }, className: "button-light-mode-instance-1" }
}

function App() {
  return (
    <Overlay />
  );
}

export default App;
