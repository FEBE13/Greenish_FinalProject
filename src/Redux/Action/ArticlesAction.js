import axios from "axios";
export const GET_DATA = "GET_DATA";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_DATA_ARTICLE = "SUCCESS_GET_DATA_ARTICLE";


function StartFetching() {
    return {
        type : FETCH_START
    }
}
function DoneFetchData(data) {
    return {
        type : SUCCESS_GET_DATA_ARTICLE,
        payload : data.data
    }
}

export const getArticles = () =>{

    return async (dispatch) =>{
        dispatch(StartFetching())
        const res = await axios.get("https://begreenishfinalproject-production.up.railway.app/articles")
        dispatch(DoneFetchData(res.data))
    }
}

export const postArticle = (data) =>{
    return async () =>{
        axios.post("https://begreenishfinalproject-production.up.railway.app/articles",data)
    }
}
export const deleteArticle = (id) => {
    return () =>{
        axios.delete(`https://begreenishfinalproject-production.up.railway.app/articles/${id}`)
    }
}
export const likeUpdate = (idArticle,data) => {
    return  async() =>{
        await axios.post(`https://begreenishfinalproject-production.up.railway.app/like`,data)
        await axios.put(`https://begreenishfinalproject-production.up.railway.app/articles/likeby/${idArticle}`)
        // const res = await axios.get("https://begreenishfinalproject-production.up.railway.app/articles")
        // DoneFetchData(res.data)
    }
}