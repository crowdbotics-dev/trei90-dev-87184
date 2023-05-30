import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_xewrwt_list = createAsyncThunk(
  "xewrwts/api_v1_xewrwt_list",
  async payload => {
    const response = await apiService.api_v1_xewrwt_list(payload)
    return response.data
  }
)
export const api_v1_xewrwt_create = createAsyncThunk(
  "xewrwts/api_v1_xewrwt_create",
  async payload => {
    const response = await apiService.api_v1_xewrwt_create(payload)
    return response.data
  }
)
export const api_v1_xewrwt_retrieve = createAsyncThunk(
  "xewrwts/api_v1_xewrwt_retrieve",
  async payload => {
    const response = await apiService.api_v1_xewrwt_retrieve(payload)
    return response.data
  }
)
export const api_v1_xewrwt_update = createAsyncThunk(
  "xewrwts/api_v1_xewrwt_update",
  async payload => {
    const response = await apiService.api_v1_xewrwt_update(payload)
    return response.data
  }
)
export const api_v1_xewrwt_partial_update = createAsyncThunk(
  "xewrwts/api_v1_xewrwt_partial_update",
  async payload => {
    const response = await apiService.api_v1_xewrwt_partial_update(payload)
    return response.data
  }
)
export const api_v1_xewrwt_destroy = createAsyncThunk(
  "xewrwts/api_v1_xewrwt_destroy",
  async payload => {
    const response = await apiService.api_v1_xewrwt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const xewrwtsSlice = createSlice({
  name: "xewrwts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_xewrwt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xewrwt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xewrwt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xewrwt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xewrwt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xewrwt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_xewrwt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_xewrwt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_xewrwt_list,
  api_v1_xewrwt_create,
  api_v1_xewrwt_retrieve,
  api_v1_xewrwt_update,
  api_v1_xewrwt_partial_update,
  api_v1_xewrwt_destroy,
  slice: xewrwtsSlice
}
