import {getApiURL} from "../ApiURL";
import {AxiosApiInstance} from "../AxiosApiInstance";
import {AboutPageApi, Configuration} from "./../api/generated";
const configuration = new Configuration({});

export const AboutPageEndpoint = new AboutPageApi(configuration, getApiURL(), AxiosApiInstance.instance.axiosInstace);
