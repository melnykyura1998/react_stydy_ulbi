import axios from "axios";
import {baseURL} from "../constance/constance";


export const axiosService = axios.create({baseURL})
