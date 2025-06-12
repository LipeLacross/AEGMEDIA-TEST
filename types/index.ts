// types/index.ts - Definições de tipos globais
import type { Component } from 'vue'

export interface AutoShieldPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  maxCoverage: string
  popular: boolean
  cta: string
  features: string[]
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  city: string
  brand: string
  model: string
  year: string
  value: string
  message?: string
  acceptTerms: boolean
}

export interface TestimonialData {
  content: string
  author: string
  location: string
  rating: string
  verified?: boolean
}

export interface ServiceFeature {
  icon: Component
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

export interface NewsletterData {
  email: string
  name?: string
  source?: string
}

// Tipos para Hugging Face
export interface HuggingFaceResponse {
  generated_text: string
}

export interface HuggingFaceError {
  error: string
  status?: number
}

// Tipos para Brevo
export interface BrevoContact {
  email: string
  listIds: number[]
  attributes: Record<string, string>
  updateEnabled: boolean
}

export interface BrevoResponse {
  id: number
  email: string
}

export interface BrevoError {
  code: string
  message: string
}
