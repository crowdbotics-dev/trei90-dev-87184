import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vyui_list = createAsyncThunk(
  "vyuis/api_v1_vyui_list",
  async payload => {
    const response = await apiService.api_v1_vyui_list(payload)
    return response.data
  }
)
export const api_v1_vyui_create = createAsyncThunk(
  "vyuis/api_v1_vyui_create",
  async payload => {
    const response = await apiService.api_v1_vyui_create(payload)
    return response.data
  }
)
export const api_v1_vyui_retrieve = createAsyncThunk(
  "vyuis/api_v1_vyui_retrieve",
  async payload => {
    const response = await apiService.api_v1_vyui_retrieve(payload)
    return response.data
  }
)
export const api_v1_vyui_update = createAsyncThunk(
  "vyuis/api_v1_vyui_update",
  async payload => {
    const response = await apiService.api_v1_vyui_update(payload)
    return response.data
  }
)
export const api_v1_vyui_partial_update = createAsyncThunk(
  "vyuis/api_v1_vyui_partial_update",
  async payload => {
    const response = await apiService.api_v1_vyui_partial_update(payload)
    return response.data
  }
)
export const api_v1_vyui_destroy = createAsyncThunk(
  "vyuis/api_v1_vyui_destroy",
  async payload => {
    const response = await apiService.api_v1_vyui_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vyuisSlice = createSlice({
  name: "vyuis",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vyui_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vyui_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vyui_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vyui_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vyui_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vyui_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vyui_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vyui_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vyui_list,
  api_v1_vyui_create,
  api_v1_vyui_retrieve,
  api_v1_vyui_update,
  api_v1_vyui_partial_update,
  api_v1_vyui_destroy,
  slice: vyuisSlice
}
