import client from '../providers/client'

export const login = (data) => client.post('/login/authenticate', data)
