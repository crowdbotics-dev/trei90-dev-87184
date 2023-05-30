import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_zak12_list = createAsyncThunk(
  "zak12s/api_v1_zak12_list",
  async payload => {
    const response = await apiService.api_v1_zak12_list(payload)
    return response.data
  }
)
export const api_v1_zak12_create = createAsyncThunk(
  "zak12s/api_v1_zak12_create",
  async payload => {
    const response = await apiService.api_v1_zak12_create(payload)
    return response.data
  }
)
export const api_v1_zak12_retrieve = createAsyncThunk(
  "zak12s/api_v1_zak12_retrieve",
  async payload => {
    const response = await apiService.api_v1_zak12_retrieve(payload)
    return response.data
  }
)
export const api_v1_zak12_update = createAsyncThunk(
  "zak12s/api_v1_zak12_update",
  async payload => {
    const response = await apiService.api_v1_zak12_update(payload)
    return response.data
  }
)
export const api_v1_zak12_partial_update = createAsyncThunk(
  "zak12s/api_v1_zak12_partial_update",
  async payload => {
    const response = await apiService.api_v1_zak12_partial_update(payload)
    return response.data
  }
)
export const api_v1_zak12_destroy = createAsyncThunk(
  "zak12s/api_v1_zak12_destroy",
  async payload => {
    const response = await apiService.api_v1_zak12_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const zak12sSlice = createSlice({
  name: "zak12s",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_zak12_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zak12_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zak12_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zak12_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zak12_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zak12_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_zak12_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_zak12_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_zak12_list,
  api_v1_zak12_create,
  api_v1_zak12_retrieve,
  api_v1_zak12_update,
  api_v1_zak12_partial_update,
  api_v1_zak12_destroy,
  slice: zak12sSlice
}
