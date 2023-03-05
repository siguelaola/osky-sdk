import React, { useState } from "react";
import { ComponentProps } from "./ScreenComponent";
import { DateBlockData } from "../interfaces/types";
import "./css/DateComponent.css";

interface DateComponentState {
  date: string | undefined;
}

class DateComponent extends React.Component<
  ComponentProps,
  DateComponentState
> {
  config: DateBlockData;

  constructor(props: ComponentProps) {
    super(props);

    this.config = props.data as DateBlockData;

    this.state = {
      date: undefined,
    };
  }

  componentDidMount() {
    this.setState({ date: this.config.startDate });
    this.props.onChange(
      this.props.id,
      this.config.startDate,
      this.config.required ?? false
    );
  }

  dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value });
    this.props.onChange(this.props.id, event.target.value, true);
  };

  render() {
    return (
      <div className="date-container">
        <input
          type="date"
          value={this.state.date ?? undefined}
          min={this.config.startDate ?? undefined}
          max={this.config.endDate ?? undefined}
          onChange={this.dateChange}
          required
        />
      </div>
    );
  }
}

export default DateComponent;
