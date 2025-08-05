import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export type Profile = {
  id: string
  email: string
  display_name?: string
  avatar_url?: string
  subscription_status: 'free' | 'unlimited' | 'monthly'
  subscription_expires_at?: string
  created_at: string
  updated_at: string
}

export type TestCategory = {
  id: number
  name: string
  slug: string
  description?: string
  icon_url?: string
  created_at: string
}

export type Test = {
  id: number
  category_id: number
  title: string
  description?: string
  image_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type TestQuestion = {
  id: number
  test_id: number
  question_text: string
  question_order: number
  image_url?: string
  created_at: string
}

export type TestOption = {
  id: number
  question_id: number
  option_text: string
  option_order: number
  score_value?: number
  result_type?: string
  created_at: string
}

export type UserTest = {
  id: number
  user_id: string
  test_id: number
  answers: string
  result_summary?: string
  result_details: string
  completed_at: string
}

export type UserDailyLimit = {
  id: number
  user_id: string
  date: string
  tests_taken: number
  is_unlimited: boolean
  created_at: string
  updated_at: string
}

export type Subscription = {
  id: number
  user_id: string
  stripe_subscription_id?: string
  status: 'active' | 'cancelled' | 'expired'
  plan_type: 'unlimited' | 'monthly'
  amount: number
  currency: string
  created_at: string
  expires_at?: string
}

export type Payment = {
  id: number
  user_id: string
  stripe_payment_intent_id?: string
  amount: number
  currency: string
  status: 'pending' | 'succeeded' | 'failed'
  payment_method?: string
  created_at: string
}