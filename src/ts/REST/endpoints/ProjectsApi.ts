import {getApiURL} from "../ApiURL";
import {AxiosApiInstance} from "../AxiosApiInstance";
import {ProjectApi, Configuration} from "../api/generated";
const configuration = new Configuration({});

export const ProjectsEndpoint = new ProjectApi(configuration, getApiURL(), AxiosApiInstance.instance.axiosInstace);
