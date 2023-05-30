import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_brat_list = createAsyncThunk(
  "brats/api_v1_brat_list",
  async payload => {
    const response = await apiService.api_v1_brat_list(payload)
    return response.data
  }
)
export const api_v1_brat_create = createAsyncThunk(
  "brats/api_v1_brat_create",
  async payload => {
    const response = await apiService.api_v1_brat_create(payload)
    return response.data
  }
)
export const api_v1_brat_retrieve = createAsyncThunk(
  "brats/api_v1_brat_retrieve",
  async payload => {
    const response = await apiService.api_v1_brat_retrieve(payload)
    return response.data
  }
)
export const api_v1_brat_update = createAsyncThunk(
  "brats/api_v1_brat_update",
  async payload => {
    const response = await apiService.api_v1_brat_update(payload)
    return response.data
  }
)
export const api_v1_brat_partial_update = createAsyncThunk(
  "brats/api_v1_brat_partial_update",
  async payload => {
    const response = await apiService.api_v1_brat_partial_update(payload)
    return response.data
  }
)
export const api_v1_brat_destroy = createAsyncThunk(
  "brats/api_v1_brat_destroy",
  async payload => {
    const response = await apiService.api_v1_brat_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bratsSlice = createSlice({
  name: "brats",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_brat_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_brat_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_brat_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_brat_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_brat_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_brat_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_brat_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_brat_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_brat_list,
  api_v1_brat_create,
  api_v1_brat_retrieve,
  api_v1_brat_update,
  api_v1_brat_partial_update,
  api_v1_brat_destroy,
  slice: bratsSlice
}
