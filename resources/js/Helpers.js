import iziToast from "izitoast"
import { fadeIn } from "animate.css"
import '/css/iziToast.css';

export function showNotification(params){
    return iziToast.show({
        title: params.title ? params.title : "",
        message: params.message,
        messageSize: 12,
        position: "topRight",
        theme: "dark",
        pauseOnHover: false,
        color: params.type == "success" ? "#565c70" : "#565c70",
        messageColor: params.type == "success" ? "#00ffb8" : "#00ffb8",
        icon: params.type == "success" ? "mdi mdi-check" : "mdi mdi-alert-circle-outline"
    })
}
