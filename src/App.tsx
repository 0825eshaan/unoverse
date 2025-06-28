import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProgressProvider } from './contexts/ProgressContext'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import CoursePage from './pages/CoursePage'
import ProfilePage from './pages/ProfilePage'
import LeaderboardPage from './pages/LeaderboardPage'

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/course/:courseId" element={
              <ProtectedRoute>
                <CoursePage />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/leaderboard" element={
              <ProtectedRoute>
                <LeaderboardPage />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </ProgressProvider>
    </AuthProvider>
  )
}

export default App