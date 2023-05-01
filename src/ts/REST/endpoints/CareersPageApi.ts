import {getApiURL} from "../ApiURL";
import {AxiosApiInstance} from "../AxiosApiInstance";
import {CareersPageApi, Configuration} from "../api/generated";
const configuration = new Configuration({});

export const CareersPageEndpoint = new CareersPageApi(configuration, getApiURL(), AxiosApiInstance.instance.axiosInstace);
