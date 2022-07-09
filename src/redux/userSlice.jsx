import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    isLogged: false,
  },
  reducers: {
    LoginUser(state, { payload }) {
      localStorage.setItem('token', payload)
      return { ...state, isLogged: true, token: payload }
    },
    logout(state) {
      localStorage.removeItem('token')
      return { ...state, isLogged: false, token: '' }
    }
  }
})

export const { LoginUser, logout } = slice.actions

export const selectUser = state => state.user

export default slice.reducer