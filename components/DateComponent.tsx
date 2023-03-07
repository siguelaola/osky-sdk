import React, { useState } from "react";
import { ComponentProps } from "./ScreenComponent";
import { DateBlockData } from "../interfaces/types";
import styles from "@/styles/DateComponent.module.css";

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
      date: this.props.value ?? this.config.startDate,
    };
  }

  componentDidMount() {
    this.props.onChange(
      this.props.id,
      this.state.date,
      this.config.required ?? false
    );
  }

  dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value });
    this.props.onChange(this.props.id, event.target.value, true);
  };

  render() {
    return (
      <div className={styles["date-container"]}>
        <input
          type="date"
          value={this.state.date}
          min={this.config.startDate}
          max={this.config.endDate}
          onChange={this.dateChange}
        />
      </div>
    );
  }
}

export default DateComponent;
