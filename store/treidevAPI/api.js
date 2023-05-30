import axios from "axios"
const treidevAPI = axios.create({
  baseURL: "https://trei90-dev-87184.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return treidevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_zak12_list(payload) {
  return treidevAPI.get(`/api/v1/zak12/`)
}
function api_v1_zak12_create(payload) {
  return treidevAPI.post(`/api/v1/zak12/`, payload.data)
}
function api_v1_signup_create(payload) {
  return treidevAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_xewrwt_list(payload) {
  return treidevAPI.get(`/api/v1/xewrwt/`)
}
function api_v1_xewrwt_create(payload) {
  return treidevAPI.post(`/api/v1/xewrwt/`, payload.data)
}
function api_v1_bittest_list(payload) {
  return treidevAPI.get(`/api/v1/bittest/`)
}
function api_v1_bittest_create(payload) {
  return treidevAPI.post(`/api/v1/bittest/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return treidevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return treidevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return treidevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return treidevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return treidevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return treidevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return treidevAPI.post(`/rest-auth/logout/`)
}
function api_v1_zak12_retrieve(payload) {
  return treidevAPI.get(`/api/v1/zak12/${payload.id}/`)
}
function api_v1_zak12_update(payload) {
  return treidevAPI.put(`/api/v1/zak12/${payload.id}/`, payload.data)
}
function api_v1_zak12_partial_update(payload) {
  return treidevAPI.patch(`/api/v1/zak12/${payload.id}/`, payload.data)
}
function api_v1_zak12_destroy(payload) {
  return treidevAPI.delete(`/api/v1/zak12/${payload.id}/`)
}
function api_v1_xewrwt_retrieve(payload) {
  return treidevAPI.get(`/api/v1/xewrwt/${payload.id}/`)
}
function api_v1_xewrwt_update(payload) {
  return treidevAPI.put(`/api/v1/xewrwt/${payload.id}/`, payload.data)
}
function api_v1_xewrwt_partial_update(payload) {
  return treidevAPI.patch(`/api/v1/xewrwt/${payload.id}/`, payload.data)
}
function api_v1_xewrwt_destroy(payload) {
  return treidevAPI.delete(`/api/v1/xewrwt/${payload.id}/`)
}
function api_v1_bittest_retrieve(payload) {
  return treidevAPI.get(`/api/v1/bittest/${payload.id}/`)
}
function api_v1_bittest_update(payload) {
  return treidevAPI.put(`/api/v1/bittest/${payload.id}/`, payload.data)
}
function api_v1_bittest_partial_update(payload) {
  return treidevAPI.patch(`/api/v1/bittest/${payload.id}/`, payload.data)
}
function api_v1_bittest_destroy(payload) {
  return treidevAPI.delete(`/api/v1/bittest/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return treidevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return treidevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return treidevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return treidevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return treidevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_zak12_list,
  api_v1_zak12_create,
  api_v1_signup_create,
  api_v1_xewrwt_list,
  api_v1_xewrwt_create,
  api_v1_bittest_list,
  api_v1_bittest_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_zak12_retrieve,
  api_v1_zak12_update,
  api_v1_zak12_partial_update,
  api_v1_zak12_destroy,
  api_v1_xewrwt_retrieve,
  api_v1_xewrwt_update,
  api_v1_xewrwt_partial_update,
  api_v1_xewrwt_destroy,
  api_v1_bittest_retrieve,
  api_v1_bittest_update,
  api_v1_bittest_partial_update,
  api_v1_bittest_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
