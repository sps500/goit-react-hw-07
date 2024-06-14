import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66680038f53957909ff6182a.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "Contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/Contacts`);
      console.log("Fetched contacts:", response.data);
      return response.data;
    } catch (error) {
      console.log("Error fetching contacts:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "Contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/Contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "Contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/Contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
