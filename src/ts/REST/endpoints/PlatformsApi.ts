import {getApiURL} from "../ApiURL";
import {AxiosApiInstance} from "../AxiosApiInstance";
import {PlatformApi, Configuration} from "../api/generated";
const configuration = new Configuration({});

export const PlatformsEndpoint = new PlatformApi(configuration, getApiURL(), AxiosApiInstance.instance.axiosInstace);
