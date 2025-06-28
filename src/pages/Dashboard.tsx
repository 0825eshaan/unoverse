import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { useProgress } from '../contexts/ProgressContext'
import { BookOpen, Clock, Trophy, Zap, ChevronRight } from 'lucide-react'
import { courses } from '../data/courses'

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth()
  const { getCourseProgress } = useProgress()

  const getProgressPercentage = (courseId: string) => {
    const progress = getCourseProgress(courseId)
    const course = courses.find(c => c.id === courseId)
    if (!progress || !course) return 0
    return Math.round((progress.completedLessons.length / course.lessons.length) * 100)
  }

  const stats = [
    {
      label: 'Current Level',
      value: currentUser?.level || 1,
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      label: 'Total XP',
      value: currentUser?.totalXP || 0,
      icon: Zap,
      color: 'text-blue-500'
    },
    {
      label: 'Courses Completed',
      value: currentUser?.completedCourses.length || 0,
      icon: BookOpen,
      color: 'text-green-500'
    },
    {
      label: 'Study Streak',
      value: '3 days',
      icon: Clock,
      color: 'text-purple-500'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {currentUser?.displayName?.split(' ')[0]}! 👋
        </h1>
        <p className="text-gray-600">
          Continue your Arduino learning journey
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Level Progress</h3>
          <span className="text-sm text-gray-600">
            {currentUser?.xp || 0}/1000 XP to Level {(currentUser?.level || 1) + 1}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentUser?.xp || 0) / 1000) * 100}%` }}
          />
        </div>
      </motion.div>

      {/* Courses Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const progress = getProgressPercentage(course.id)
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.estimatedTime}
                  </span>
                  <span className="flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    {course.xpReward} XP
                  </span>
                </div>

                {progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <Link
                  to={`/course/${course.id}`}
                  className="btn-primary w-full justify-center group-hover:bg-primary-700"
                >
                  {progress > 0 ? 'Continue' : 'Start Course'}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard