import { toast, ToastPosition } from "react-toastify";

export const toastErrMessage = (
  message:string,
  position: ToastPosition|undefined= "bottom-center",
  hideProgressBar:boolean = true,
  closeOnClick:boolean = true,
  pauseOnHover:boolean = true,
  draggable:boolean = true,
  autoClose:number = 3000
) => {
  toast.error(message, {
    position,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    autoClose,
  });
};
export const toastSuccessMessage = (
  message:string,
  position:ToastPosition|undefined = "bottom-center",
  hideProgressBar:boolean = true,
  closeOnClick:boolean = true,
  pauseOnHover:boolean = true,
  draggable:boolean = true,
  autoClose:number = 3000
) => {
  toast.success(message, {
    position,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    autoClose,
  });
};