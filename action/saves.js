import { handleErrorResponseSquelize } from "../helpers/hanleError";
import { postLogin } from "../services/apps";

export function getSaves(id,postId) {
    postLogin(id)
        .then(res => {

        })
        .catch(res => {
            handleErrorResponseSquelize(res)
        })
}