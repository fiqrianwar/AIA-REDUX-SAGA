import API from "../../../api/API"


const token         = localStorage.getItem('token')

const getAllCategory = async (url) => {
    
    try {
            const response = await API.get(url,{
                headers : {
                    Authorization :  `Bearer ${token}`
                }
            })
            
            return response.data.data
    } catch (error) {
        console.log(error);
    }
}


const addData = async (api,name) => {

    try {
        const response = await API.post(api,{
            name : name
        },{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

        return response.data.data
        
    } catch (error) {
        console.log(error);
    }
    
}

const getSpecificCategories = async (id) => {

    try {
        const getCategories = await API.get(`/category/${id}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

        return getCategories.data.data
        
    } catch (error) {
        
    }

}

const updateCategories = async (api,id,name) => {

    try {
        const response = await API.put(api, {
            id    : id,
            name  : name,
        },{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        return response.data.data
        
    } catch (error) {
        console.log(error);
    }

}
const deleteApi = async (id) => {

    try {
        const response = await API.delete(`/category/${id}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        
        console.log(response);

    } catch (error) {
        console.log(error);
    }

}


export { 
            getAllCategory, 
            addData, 
            getSpecificCategories, 
            updateCategories,
            deleteApi
        }