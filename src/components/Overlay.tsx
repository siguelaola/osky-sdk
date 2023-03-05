import "../App.css";
import "./css/Overlay.css";

import StateMachine from "./StateMachine";
import { DashboardData } from "../interfaces/types";

interface OverlayProps {
    session: DashboardData;
}

function Overlay(props: OverlayProps) {
  return <StateMachine session={props.session} />
}

export default Overlay;
