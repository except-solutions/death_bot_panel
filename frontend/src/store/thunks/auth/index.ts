import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData } from "../../../common/types/auth";

export const loginUser = createAsyncThunk(
    'auth/login',
    (ILoginData, {rejectWithValue}) => {

    }
)