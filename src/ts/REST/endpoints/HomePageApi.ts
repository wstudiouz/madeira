import {getApiURL} from "../ApiURL";
import {AxiosApiInstance} from "../AxiosApiInstance";
import {HomePageApi, Configuration} from "./../api/generated";
const configuration = new Configuration({});

export const HomePageEndpoint = new HomePageApi(configuration, getApiURL(), AxiosApiInstance.instance.axiosInstace);
