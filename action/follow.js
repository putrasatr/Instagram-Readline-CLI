import { handleErrorResponseSquelize } from "../helpers/hanleError";
import { postLogin } from "../services/apps";

export function getFollow(id) {
    postLogin(id)
        .then(res => {

        })
        .catch(res => {
            handleErrorResponseSquelize(res)
        })
}