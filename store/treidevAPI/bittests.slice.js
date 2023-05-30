import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bittest_list = createAsyncThunk(
  "bittests/api_v1_bittest_list",
  async payload => {
    const response = await apiService.api_v1_bittest_list(payload)
    return response.data
  }
)
export const api_v1_bittest_create = createAsyncThunk(
  "bittests/api_v1_bittest_create",
  async payload => {
    const response = await apiService.api_v1_bittest_create(payload)
    return response.data
  }
)
export const api_v1_bittest_retrieve = createAsyncThunk(
  "bittests/api_v1_bittest_retrieve",
  async payload => {
    const response = await apiService.api_v1_bittest_retrieve(payload)
    return response.data
  }
)
export const api_v1_bittest_update = createAsyncThunk(
  "bittests/api_v1_bittest_update",
  async payload => {
    const response = await apiService.api_v1_bittest_update(payload)
    return response.data
  }
)
export const api_v1_bittest_partial_update = createAsyncThunk(
  "bittests/api_v1_bittest_partial_update",
  async payload => {
    const response = await apiService.api_v1_bittest_partial_update(payload)
    return response.data
  }
)
export const api_v1_bittest_destroy = createAsyncThunk(
  "bittests/api_v1_bittest_destroy",
  async payload => {
    const response = await apiService.api_v1_bittest_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bittestsSlice = createSlice({
  name: "bittests",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bittest_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bittest_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bittest_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bittest_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bittest_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bittest_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bittest_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bittest_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bittest_list,
  api_v1_bittest_create,
  api_v1_bittest_retrieve,
  api_v1_bittest_update,
  api_v1_bittest_partial_update,
  api_v1_bittest_destroy,
  slice: bittestsSlice
}
