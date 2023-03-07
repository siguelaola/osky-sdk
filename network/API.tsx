
import { DashboardData } from "../interfaces/types";

export default class API {
  static api_url = "http://localhost.proxyman.io:8080";

  static getPath(path: string): string {
    return this.api_url + path
  }

  static async getSession(): Promise<DashboardData> {
    const response = await fetch(API.getPath("/files/types.json"));
    // const response = await fetch(API.getPath("/files/3nodes.json"));
    // const response = await fetch(API.getPath("/files/tellUsAboutYou.json"));
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const data: DashboardData = await response.json();
    return data;
  }

  static async updateSession(state: {[key: string]: any}): Promise<void> {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      };
      
    const response = await fetch(API.getPath("/updateSession"), requestOptions);
    if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
    }
  }

  static async finish(): Promise<void> {
    
  }
}