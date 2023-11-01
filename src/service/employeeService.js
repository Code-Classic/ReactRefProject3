import axios from "axios";

const API_URL="http://localhost:8080";
class EmployeeService{
    saveEmployee(employee){
        return axios.post(API_URL+"/saveEmployee",employee);
    }

    getAllEmployees(){
        return axios.get(API_URL+"/");
    }

    getEmployeeById(id){
        return axios.get(API_URL+"/"+id);
    }

    deleteEmployee(id){
        return axios.get(API_URL+"/deleteEmployee/"+id);
    }

    updateEmployee(employee){
        return axios.post(API_URL+"/updateEmployee/"+ employee.id , employee);
    }
}

export default new EmployeeService