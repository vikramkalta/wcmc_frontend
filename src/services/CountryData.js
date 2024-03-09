import { APP_CONFIG } from "../utils/Constants";
import APIKit from "./API";

const BASE_PATH = `${APP_CONFIG.BASE_URL}/api/country-data`;
export default class CountryDataService {
  static async getCountryNames(searchStr) {
    const { data } = await APIKit.get(`${BASE_PATH}/countries?prefix=${searchStr}`);
    if (!data?.success) {
      throw data.data;
    }
    return data.data;
  }

  static async getCountryMetrics(country) {
    const { data } = await APIKit.get(`${BASE_PATH}/metrics?country=${country}`);
    if (!data?.success) {
      throw data.data;
    }
    return data.data;
  }
}
