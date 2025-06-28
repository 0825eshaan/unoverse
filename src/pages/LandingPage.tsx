import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, BookOpen, Trophy, Users, Code, Cpu } from 'lucide-react'

const LandingPage: React.FC = () => {
  const { currentUser, signInWithGoogle } = useAuth()

  if (currentUser) {
    return <Navigate to="/dashboard" />
  }

  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Courses',
      description: 'Learn Arduino programming through hands-on lessons and real-world projects'
    },
    {
      icon: Code,
      title: 'Code Practice',
      description: 'Write and test Arduino code directly in your browser with instant feedback'
    },
    {
      icon: Trophy,
      title: 'XP & Achievements',
      description: 'Earn experience points, level up, and unlock badges as you progress'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with fellow makers and compete on the global leaderboard'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <Zap className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold text-white">Unoverse</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Master Arduino
              <br />
              <span className="text-yellow-400">Programming</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Learn electronics and programming through interactive courses, 
              hands-on projects, and a gamified learning experience.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={signInWithGoogle}
              className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 mx-auto text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </motion.button>
          </div>
        </div>

        {/* Floating Arduino Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 text-white/20"
          >
            <Cpu className="h-16 w-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-1/3 right-1/4 text-white/20"
          >
            <Code className="h-12 w-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 left-1/3 text-white/20"
          >
            <Zap className="h-14 w-14" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Unoverse?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The most engaging way to learn Arduino programming and electronics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Arduino Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of makers learning Arduino programming through our interactive platform
            </p>
            <button
              onClick={signInWithGoogle}
              className="bg-yellow-400 text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-200 text-lg"
            >
              Get Started for Free
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage