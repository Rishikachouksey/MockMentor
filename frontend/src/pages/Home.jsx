import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsStars,
  BsLightningCharge,
  BsShieldCheck
} from "react-icons/bs";

import {
  HiSparkles,
  HiMiniCpuChip
} from "react-icons/hi2";

import {
  FaBrain,
  FaMicrophoneAlt,
  FaChartLine,
  FaRocket
} from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';

import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";

import Footer from '../components/Footer';

function Home() {

  const { userData } = useSelector((state) => state.user)

  const [showAuth, setShowAuth] = useState(false);

  const navigate = useNavigate()

  return (

    <div className='min-h-screen bg-[#f8fbf8] flex flex-col overflow-hidden relative'>

      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className='absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-green-300 rounded-full blur-3xl'
      />

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
        className='absolute bottom-[-120px] right-[-120px] w-[380px] h-[380px] bg-emerald-200 rounded-full blur-3xl'
      />

      {/* Floating Particles */}

      {
        [...Array(15)].map((_, i) => (

          <motion.div
            key={i}

            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2]
            }}

            transition={{
              duration: 3 + i,
              repeat: Infinity
            }}

            className='absolute w-2 h-2 bg-green-400 rounded-full opacity-20'

            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))
      }

      <Navbar />

      <div className='flex-1 px-6 py-20 relative z-10'>

        <div className='max-w-7xl mx-auto'>

          {/* TOP BADGE */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}

            className='flex justify-center mb-8'
          >

            <div className='bg-white border border-green-100 shadow-md px-5 py-3 rounded-full flex items-center gap-3'>

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <HiSparkles className='text-green-600 text-xl' />
              </motion.div>

              <span className='text-gray-700 font-medium text-sm md:text-base'>
                AI Powered Smart Interview Platform
              </span>

            </div>

          </motion.div>

          {/* HERO SECTION */}

          <div className='text-center mb-32 relative'>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className='inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full mb-6 shadow-sm'
            >
              <HiMiniCpuChip />
              AI Engine Active
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

              className='text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto'
            >

              Crack Interviews with{" "}

              <span className='relative inline-block'>

                <span className='bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'>
                  AI Intelligence
                </span>

                <motion.div
                  animate={{
                    width: ["0%", "100%", "0%"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                  className='absolute bottom-0 left-0 h-2 bg-green-200 rounded-full'
                />

              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}

              className='text-gray-500 mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed'
            >

              Experience next-generation AI interviews with adaptive questioning,
              voice analysis, resume intelligence, confidence tracking,
              and real-time performance evaluation.

            </motion.p>

            {/* Buttons */}

            <div className='flex flex-wrap justify-center gap-5 mt-12'>

              <motion.button

                onClick={() => {
                  if (!userData) {
                    setShowAuth(true)
                    return;
                  }

                  navigate("/interview")
                }}

                whileHover={{
                  scale: 1.05,
                  y: -3
                }}

                whileTap={{
                  scale: 0.96
                }}

                className='relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600
                text-white px-10 py-4 rounded-full shadow-xl font-semibold'
              >

                <motion.div
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  className='absolute inset-0 bg-white/20 skew-x-12'
                />

                <span className='relative z-10 flex items-center gap-2'>
                  <FaRocket />
                  Start AI Interview
                </span>

              </motion.button>

              <motion.button

                onClick={() => {
                  if (!userData) {
                    setShowAuth(true)
                    return;
                  }

                  navigate("/history")
                }}

                whileHover={{
                  scale: 1.04,
                  y: -2
                }}

                whileTap={{
                  scale: 0.97
                }}

                className='border border-green-200 bg-white
                px-10 py-4 rounded-full shadow-md hover:bg-green-50 transition'
              >

                View Analytics

              </motion.button>

            </div>

            {/* LIVE STATS */}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 max-w-5xl mx-auto'>

              {
                [
                  { value: "10K+", label: "AI Questions" },
                  { value: "95%", label: "Accuracy" },
                  { value: "24/7", label: "AI Support" },
                  { value: "5+", label: "Interview Modes" },
                ].map((item, index) => (

                  <motion.div
                    key={index}

                    whileHover={{
                      y: -5,
                      scale: 1.03
                    }}

                    className='bg-white border border-green-100 rounded-3xl p-6 shadow-md'
                  >

                    <h2 className='text-3xl font-black text-green-600'>
                      {item.value}
                    </h2>

                    <p className='text-sm text-gray-500 mt-2'>
                      {item.label}
                    </p>

                  </motion.div>
                ))
              }

            </div>

          </div>

          {/* PROCESS SECTION */}

          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-32'>

            {
              [
                {
                  icon: <BsRobot size={24} />,
                  step: "STEP 1",
                  title: "Role & Experience Selection",
                  desc: "AI dynamically adjusts interview difficulty based on role and experience."
                },
                {
                  icon: <BsMic size={24} />,
                  step: "STEP 2",
                  title: "Real-Time Voice Interview",
                  desc: "Adaptive follow-up questions with AI-powered interaction."
                },
                {
                  icon: <BsClock size={24} />,
                  step: "STEP 3",
                  title: "Smart Evaluation Report",
                  desc: "Detailed analytics, confidence score and improvement feedback."
                }
              ].map((item, index) => (

                <motion.div

                  key={index}

                  initial={{ opacity: 0, y: 60 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  transition={{
                    duration: 0.7,
                    delay: index * 0.2
                  }}

                  whileHover={{
                    scale: 1.05,
                    rotate: 0
                  }}

                  className={`
                    relative bg-white rounded-[32px]
                    border border-green-100
                    p-10 w-80 max-w-[90%]
                    shadow-xl hover:shadow-2xl
                    transition-all duration-300

                    ${index === 0 ? "rotate-[-4deg]" : ""}
                    ${index === 1 ? "rotate-[3deg] md:-mt-8" : ""}
                    ${index === 2 ? "rotate-[-3deg]" : ""}
                  `}
                >

                  <motion.div

                    animate={{
                      y: [0, -8, 0]
                    }}

                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}

                    className='absolute -top-8 left-1/2 -translate-x-1/2
                    bg-gradient-to-r from-green-500 to-emerald-600
                    text-white w-16 h-16 rounded-2xl
                    flex items-center justify-center shadow-xl'
                  >

                    {item.icon}

                  </motion.div>

                  <div className='pt-10 text-center'>

                    <div className='text-xs text-green-600 font-bold tracking-wider mb-3'>
                      {item.step}
                    </div>

                    <h3 className='font-bold mb-4 text-xl text-gray-800'>
                      {item.title}
                    </h3>

                    <p className='text-sm text-gray-500 leading-relaxed'>
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              ))
            }

          </div>

          {/* AI FEATURES */}

          <div className='mb-32'>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              className='text-5xl font-black text-center mb-20'
            >

              Advanced AI{" "}

              <span className='text-green-600'>
                Capabilities
              </span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>

              {
                [
                  {
                    image: evalImg,
                    icon: <BsBarChart size={20} />,
                    title: "AI Answer Evaluation",
                    desc: "Analyze technical accuracy, communication and confidence in real-time."
                  },
                  {
                    image: resumeImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Resume Intelligence",
                    desc: "AI generates personalized questions from your projects and skills."
                  },
                  {
                    image: pdfImg,
                    icon: <BsShieldCheck size={20} />,
                    title: "Professional PDF Reports",
                    desc: "Download detailed interview analytics and improvement roadmap."
                  },
                  {
                    image: analyticsImg,
                    icon: <BsLightningCharge size={20} />,
                    title: "Live Performance Analytics",
                    desc: "Track growth trends, strengths, weaknesses and interview history."
                  }
                ].map((item, index) => (

                  <motion.div

                    key={index}

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    whileHover={{
                      scale: 1.03
                    }}

                    className='group bg-white border border-green-100 rounded-[32px]
                    p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative'
                  >

                    <motion.div
                      animate={{
                        x: ["-100%", "200%"]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity
                      }}
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent'
                    />

                    <div className='flex flex-col md:flex-row items-center gap-8 relative z-10'>

                      <motion.div
                        whileHover={{
                          rotate: 3,
                          scale: 1.05
                        }}
                        className='w-full md:w-1/2 flex justify-center'
                      >

                        <img
                          src={item.image}
                          alt={item.title}
                          className='w-full h-auto object-contain max-h-64'
                        />

                      </motion.div>

                      <div className='w-full md:w-1/2'>

                        <div className='bg-green-100 text-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm'>
                          {item.icon}
                        </div>

                        <h3 className='font-bold mb-4 text-2xl text-gray-800'>
                          {item.title}
                        </h3>

                        <p className='text-gray-500 text-sm leading-relaxed'>
                          {item.desc}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                ))
              }

            </div>

          </div>

          {/* INTERVIEW MODES */}

          <div className='mb-32'>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              className='text-5xl font-black text-center mb-20'
            >

              Multiple Interview{" "}

              <span className='text-green-600'>
                Modes
              </span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>

              {
                [
                  {
                    img: hrImg,
                    title: "HR Interview Mode",
                    desc: "Behavioral and communication-focused AI evaluation."
                  },
                  {
                    img: techImg,
                    title: "Technical Interview Mode",
                    desc: "Role-specific deep technical assessments."
                  },
                  {
                    img: confidenceImg,
                    title: "Confidence Detection",
                    desc: "AI analyzes tone, hesitation and speaking confidence."
                  },
                  {
                    img: creditImg,
                    title: "Smart Credit System",
                    desc: "Unlock premium AI interviews with credits."
                  }
                ].map((mode, index) => (

                  <motion.div

                    key={index}

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    whileHover={{
                      y: -8,
                      scale: 1.02
                    }}

                    className='bg-white border border-green-100 rounded-[32px]
                    p-8 shadow-lg hover:shadow-2xl transition-all duration-300'
                  >

                    <div className='flex items-center justify-between gap-6'>

                      <div className='w-1/2'>

                        <h3 className='font-bold text-2xl mb-4 text-gray-800'>
                          {mode.title}
                        </h3>

                        <p className='text-gray-500 text-sm leading-relaxed'>
                          {mode.desc}
                        </p>

                      </div>

                      <motion.div
                        whileHover={{
                          rotate: 5,
                          scale: 1.08
                        }}
                        className='w-1/2 flex justify-end'
                      >

                        <img
                          src={mode.img}
                          alt={mode.title}
                          className='w-32 h-32 object-contain'
                        />

                      </motion.div>

                    </div>

                  </motion.div>
                ))
              }

            </div>

          </div>

        </div>

      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

      <Footer />

    </div>
  )
}

export default Home