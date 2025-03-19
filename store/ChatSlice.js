import { axiosInstance } from "@/api/base";
import { authHeader_Without_Token } from "@/helpers/authHelper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "idel",
};
export const RemoveUser = createAsyncThunk("User/RemoveUser", async (body) => {
  try {
    const response = await axiosInstance?.delete(
      `user/deleteUser?email=${body?.email}&orgId=${body?.orgId}`,
      {
        headers: authHeader_Without_Token(),
      }
    );
    return response?.data;
  } catch (e) {
    return e?.response?.data;
  }
});
export const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(RemoveUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(RemoveUser.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(RemoveUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export default UserSlice.reducer;
