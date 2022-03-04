import { login } from '../services/auth'

export const authProvider = {
  isAuthenticated: false,
  signin: async (data, callback) => {
    try {
      const response = await login(data)
      console.log(response)
      const user = {
        token: response.data.token,
        name: 'Usuário',
      }
      localStorage.setItem('user', JSON.stringify(user))
      callback(user)
    } catch (error) {
      console.log(error)
    }
  },
  signout: (callback) => {
    localStorage.removeItem('user')
    callback()
  },
}
