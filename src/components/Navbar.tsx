import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Zap, User, Trophy, BookOpen, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  if (!currentUser) {
    return null
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold gradient-text">Unoverse</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/dashboard') 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            
            <Link
              to="/leaderboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                isActive('/leaderboard') 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              <Trophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-primary-50 px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-primary-700">Level {currentUser.level}</span>
              <div className="w-16 h-2 bg-primary-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-600 transition-all duration-300"
                  style={{ width: `${(currentUser.xp / 1000) * 100}%` }}
                />
              </div>
              <span className="text-xs text-primary-600">{currentUser.xp}/1000 XP</span>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <img
                  src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}&background=3b82f6&color=fff`}
                  alt={currentUser.displayName}
                  className="h-8 w-8 rounded-full"
                />
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-t-lg"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-b-lg w-full text-left"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar