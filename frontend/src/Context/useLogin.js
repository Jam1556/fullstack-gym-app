import { useState } from 'react'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)
    
        const response = await fetch('/api/user/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ email, password })
        })
        const json = await response.json()
    
        if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
        }
        if (response.ok) {
          // saves the user to local storage
          localStorage.setItem('user', JSON.stringify(json))
    
          // update the authentication context
          dispatch({type: 'LOGIN', payload: json})
    
          // update the loading state
          setIsLoading(false)
        }
      }

      return { login, isLoading, error }
}