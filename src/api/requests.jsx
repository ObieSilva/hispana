import axiosInstance from "../axiosInstance";

export const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/v1/users", userData);
    console.log("User added:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response:", error.request);
    } else {
      console.error("Error", error.message);
    }
    throw error;
  }
};
