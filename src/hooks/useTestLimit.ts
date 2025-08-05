'use client'

import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from './useAuth'

export interface TestLimitData {
  canTakeTest: boolean
  remainingTests: number
  testsTaken: number
  isUnlimited: boolean
  date: string
}

export function useTestLimit() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const checkDailyLimit = useCallback(async (): Promise<TestLimitData | null> => {
    if (!user) return null

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.functions.invoke('check-daily-limit', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        }
      })

      if (error) throw error

      return data.data
    } catch (err: any) {
      const errorMessage = err.message || 'テスト制限の確認に失敗しました'
      setError(errorMessage)
      console.error('Error checking daily limit:', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [user])

  const updateTestCount = useCallback(async (): Promise<TestLimitData | null> => {
    if (!user) return null

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.functions.invoke('update-test-count', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        }
      })

      if (error) throw error

      return data.data
    } catch (err: any) {
      const errorMessage = err.message || 'テスト回数の更新に失敗しました'
      setError(errorMessage)
      console.error('Error updating test count:', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [user])

  return {
    loading,
    error,
    checkDailyLimit,
    updateTestCount
  }
}