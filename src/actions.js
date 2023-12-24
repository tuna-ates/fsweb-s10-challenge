import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export function notEkle(not) {
  return({type:NOT_EKLE,payload:not})
}

export function notSil(notId) {
   return({type:NOT_SIL,payload:notId})
}

export const notEkleAPI = (yeniNot) => dispatch => {
  const toastNotEkle = toast.loading("Not ekleniyor...",{autoClose:2000})
  setTimeout(()=>
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
        dispatch(notEkle(res.data.json))
        toast.update(toastNotEkle, { render: "All is good", type: "success", isLoading: false ,autoClose:3000});
      }
      //console.log("anaData",res.data.json);
      
    })
    .catch((error) => console.log(error)),2000)
}

export const notSilAPI = (id) => dispatch => {
  console.log("deneme----",id)
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin 
        dispatch(notSil(res.data.data))
      }
      console.log("denemeId",res.data);
    })
    .catch((error) => console.log(error));
}