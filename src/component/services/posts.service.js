import {axiosService} from "./axios.service";
import {nextUrl} from "../constance/constance";

export const postsService = {
    getAll: (limit=10,page=1)=>axiosService.get(nextUrl.posts,{params{
        _limit: limit,
            _page: page}
    })
}