import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, Award, Zap } from 'lucide-react'

const LeaderboardPage: React.FC = () => {
  // Mock leaderboard data
  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', level: 15, totalXP: 14250, avatar: 'https://ui-avatars.com/api/?name=Alex+Chen&background=f59e0b&color=fff' },
    { rank: 2, name: 'Sarah Johnson', level: 12, totalXP: 11800, avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=10b981&color=fff' },
    { rank: 3, name: 'Mike Rodriguez', level: 11, totalXP: 10500, avatar: 'https://ui-avatars.com/api/?name=Mike+Rodriguez&background=3b82f6&color=fff' },
    { rank: 4, name: 'Emma Wilson', level: 10, totalXP: 9750, avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=8b5cf6&color=fff' },
    { rank: 5, name: 'David Kim', level: 9, totalXP: 8900, avatar: 'https://ui-avatars.com/api/?name=David+Kim&background=ef4444&color=fff' },
    { rank: 6, name: 'Lisa Zhang', level: 8, totalXP: 7650, avatar: 'https://ui-avatars.com/api/?name=Lisa+Zhang&background=06b6d4&color=fff' },
    { rank: 7, name: 'Tom Anderson', level: 7, totalXP: 6800, avatar: 'https://ui-avatars.com/api/?name=Tom+Anderson&background=84cc16&color=fff' },
    { rank: 8, name: 'Maria Garcia', level: 6, totalXP: 5950, avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=f97316&color=fff' },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-gray-500">#{rank}</span>
    }
  }

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      const colors = {
        1: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
        2: 'bg-gradient-to-r from-gray-300 to-gray-500',
        3: 'bg-gradient-to-r from-amber-400 to-amber-600'
      }
      return colors[rank as keyof typeof colors]
    }
    return 'bg-gradient-to-r from-gray-100 to-gray-200'
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🏆 Leaderboard</h1>
        <p className="text-gray-600">See how you rank against other Arduino learners</p>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {/* 2nd Place */}
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-2 relative">
              <img
                src={leaderboardData[1].avatar}
                alt={leaderboardData[1].name}
                className="w-full h-full rounded-full border-4 border-gray-300"
              />
              <div className="absolute -top-2 -right-2 bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">{leaderboardData[1].name}</h3>
            <p className="text-sm text-gray-600">Level {leaderboardData[1].level}</p>
            <p className="text-sm text-gray-500">{leaderboardData[1].totalXP.toLocaleString()} XP</p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-2 relative">
              <img
                src={leaderboardData[0].avatar}
                alt={leaderboardData[0].name}
                className="w-full h-full rounded-full border-4 border-yellow-400"
              />
              <div className="absolute -top-3 -right-3 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                👑
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">{leaderboardData[0].name}</h3>
            <p className="text-sm text-gray-600">Level {leaderboardData[0].level}</p>
            <p className="text-sm text-gray-500">{leaderboardData[0].totalXP.toLocaleString()} XP</p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-2 relative">
              <img
                src={leaderboardData[2].avatar}
                alt={leaderboardData[2].name}
                className="w-full h-full rounded-full border-4 border-amber-500"
              />
              <div className="absolute -top-2 -right-2 bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">{leaderboardData[2].name}</h3>
            <p className="text-sm text-gray-600">Level {leaderboardData[2].level}</p>
            <p className="text-sm text-gray-500">{leaderboardData[2].totalXP.toLocaleString()} XP</p>
          </div>
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">Global Rankings</h2>
        <div className="space-y-3">
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`flex items-center justify-between p-4 rounded-lg ${getRankBadge(user.rank)} ${
                user.rank <= 3 ? 'text-white' : 'text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8">
                  {getRankIcon(user.rank)}
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                    Level {user.level}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span className="font-bold">{user.totalXP.toLocaleString()}</span>
                </div>
                <p className={`text-sm ${user.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                  Total XP
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Your Rank (if not in top 8) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card mt-6 border-2 border-primary-200 bg-primary-50"
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-8">
              <span className="text-lg font-bold text-primary-600">#42</span>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=You&background=3b82f6&color=fff"
              alt="Your Avatar"
              className="w-12 h-12 rounded-full border-2 border-primary-300"
            />
            <div>
              <h3 className="font-semibold text-primary-900">You</h3>
              <p className="text-sm text-primary-700">Level 3</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-primary-900">
              <Zap className="h-4 w-4" />
              <span className="font-bold">2,450</span>
            </div>
            <p className="text-sm text-primary-700">Total XP</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LeaderboardPage