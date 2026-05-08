import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App'

import { motion } from "motion/react"

import {
    FaArrowLeft,
    FaCalendarAlt,
    FaChartLine,
    FaClock,
    FaStar
} from 'react-icons/fa'

import {
    BsRobot,
    BsLightningCharge
} from "react-icons/bs"

function InterviewHistory() {

    const [interviews, setInterviews] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const getMyInterviews = async () => {

            try {

                const result = await axios.get(
                    ServerUrl + "/api/interview/get-interview",
                    { withCredentials: true }
                )

                setInterviews(result.data)

            } catch (error) {
                console.log(error)
            }
        }

        getMyInterviews()

    }, [])

    return (

        <div className='
            min-h-screen
            bg-gradient-to-br from-white via-green-50 to-emerald-50
            py-10 px-4
            relative overflow-hidden
        '>

            {/* BACKGROUND BLUR EFFECTS */}
            <div className='absolute top-[-120px] left-[-120px] w-72 h-72 bg-green-200/30 blur-3xl rounded-full'></div>

            <div className='absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-emerald-200/30 blur-3xl rounded-full'></div>

            <div className='w-[95vw] lg:w-[75vw] max-w-[1400px] mx-auto relative z-10'>

                {/* HEADER */}
                <motion.div

                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}

                    className='
                        mb-12
                        flex flex-wrap items-center justify-between gap-6
                    '
                >

                    <div className='flex items-start gap-4'>

                        <motion.button

                            whileHover={{
                                scale: 1.08,
                                x: -3
                            }}

                            whileTap={{
                                scale: 0.95
                            }}

                            onClick={() => navigate("/")}

                            className='
                                mt-1
                                p-4
                                rounded-2xl
                                bg-white
                                border border-green-100
                                shadow-lg
                                hover:shadow-xl
                                transition-all
                            '
                        >

                            <FaArrowLeft className='text-green-600 text-lg' />

                        </motion.button>

                        <div>

                            <div className='flex items-center gap-3 mb-2'>

                                <motion.div

                                    animate={{
                                        rotate: [0, 10, -10, 0]
                                    }}

                                    transition={{
                                        duration: 5,
                                        repeat: Infinity
                                    }}

                                    className='
                                        bg-gradient-to-r from-green-500 to-emerald-600
                                        text-white
                                        p-3
                                        rounded-2xl
                                        shadow-lg
                                    '
                                >

                                    <BsRobot size={20} />

                                </motion.div>

                                <h1 className='
                                    text-4xl md:text-5xl
                                    font-bold
                                    text-gray-800
                                '>
                                    Interview History
                                </h1>

                            </div>

                            <p className='text-gray-500 text-lg'>
                                Track your AI interview performance, reports and growth journey.
                            </p>

                        </div>

                    </div>

                    {/* STATS */}
                    <motion.div

                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}

                        className='
                            bg-white/90 backdrop-blur-xl
                            border border-green-100
                            rounded-3xl
                            px-6 py-5
                            shadow-xl
                            flex items-center gap-8
                        '
                    >

                        <div className='text-center'>

                            <h3 className='text-2xl font-bold text-green-600'>
                                {interviews.length}
                            </h3>

                            <p className='text-sm text-gray-500'>
                                Interviews
                            </p>

                        </div>

                        <div className='w-[1px] h-12 bg-gray-200'></div>

                        <div className='text-center'>

                            <h3 className='text-2xl font-bold text-emerald-600'>
                                {
                                    interviews.length > 0
                                        ?
                                        (
                                            interviews.reduce(
                                                (acc, item) => acc + (item.finalScore || 0),
                                                0
                                            ) / interviews.length
                                        ).toFixed(1)
                                        :
                                        0
                                }
                            </h3>

                            <p className='text-sm text-gray-500'>
                                Avg Score
                            </p>

                        </div>

                    </motion.div>

                </motion.div>

                {/* EMPTY STATE */}
                {interviews.length === 0 ?

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}

                        className='
                            bg-white/90 backdrop-blur-xl
                            border border-green-100
                            rounded-[32px]
                            shadow-2xl
                            p-14
                            text-center
                        '
                    >

                        <motion.div

                            animate={{
                                y: [0, -10, 0]
                            }}

                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}

                            className='
                                w-24 h-24
                                mx-auto mb-6
                                rounded-full
                                bg-gradient-to-r from-green-500 to-emerald-600
                                flex items-center justify-center
                                shadow-2xl
                            '
                        >

                            <BsLightningCharge
                                className='text-white text-4xl'
                            />

                        </motion.div>

                        <h2 className='text-2xl font-bold text-gray-800 mb-3'>
                            No Interviews Found
                        </h2>

                        <p className='text-gray-500 mb-8'>
                            Start your first AI interview and track your growth journey.
                        </p>

                        <motion.button

                            whileHover={{
                                scale: 1.05
                            }}

                            whileTap={{
                                scale: 0.95
                            }}

                            onClick={() => navigate("/")}

                            className='
                                bg-gradient-to-r from-green-500 to-emerald-600
                                text-white
                                px-8 py-3
                                rounded-2xl
                                shadow-lg
                                font-medium
                            '
                        >

                            Start Interview

                        </motion.button>

                    </motion.div>

                    :

                    /* INTERVIEW LIST */
                    <div className='grid gap-7'>

                        {interviews.map((item, index) => (

                            <motion.div

                                key={index}

                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08
                                }}

                                whileHover={{
                                    y: -5,
                                    scale: 1.01
                                }}

                                onClick={() =>
                                    navigate(`/report/${item._id}`)
                                }

                                className='
                                    relative overflow-hidden
                                    bg-white/90 backdrop-blur-xl
                                    border border-green-100
                                    rounded-[30px]
                                    p-7
                                    shadow-lg
                                    hover:shadow-2xl
                                    transition-all duration-300
                                    cursor-pointer
                                '
                            >

                                {/* GLOW EFFECT */}
                                <div className='absolute top-0 right-0 w-40 h-40 bg-green-100/40 blur-3xl rounded-full'></div>

                                <div className='relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>

                                    {/* LEFT */}
                                    <div>

                                        <div className='flex items-center gap-3 mb-3'>

                                            <div className='
                                                bg-gradient-to-r from-green-500 to-emerald-600
                                                text-white
                                                p-3
                                                rounded-2xl
                                                shadow-md
                                            '>

                                                <FaChartLine />

                                            </div>

                                            <h3 className='
                                                text-2xl
                                                font-bold
                                                text-gray-800
                                            '>
                                                {item.role}
                                            </h3>

                                        </div>

                                        <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4'>

                                            <span className='flex items-center gap-2'>
                                                <FaStar className='text-green-500' />
                                                {item.experience}
                                            </span>

                                            <span className='flex items-center gap-2'>
                                                <BsRobot className='text-green-500' />
                                                {item.mode}
                                            </span>

                                            <span className='flex items-center gap-2'>
                                                <FaCalendarAlt className='text-green-500' />
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </span>

                                        </div>

                                        <p className='text-gray-600 leading-relaxed max-w-2xl'>
                                            AI-powered interview session with smart evaluation,
                                            adaptive questioning and detailed performance analysis.
                                        </p>

                                    </div>

                                    {/* RIGHT */}
                                    <div className='flex items-center gap-6 flex-wrap'>

                                        {/* SCORE CARD */}
                                        <motion.div

                                            whileHover={{
                                                scale: 1.05
                                            }}

                                            className='
                                                bg-gradient-to-r from-green-500 to-emerald-600
                                                text-white
                                                rounded-3xl
                                                px-7 py-5
                                                shadow-xl
                                                min-w-[130px]
                                                text-center
                                            '
                                        >

                                            <h2 className='text-3xl font-bold'>
                                                {item.finalScore || 0}/10
                                            </h2>

                                            <p className='text-sm opacity-90 mt-1'>
                                                Overall Score
                                            </p>

                                        </motion.div>

                                        {/* STATUS */}
                                        <div className='flex flex-col gap-3'>

                                            <span
                                                className={`
                                                    px-5 py-2
                                                    rounded-full
                                                    text-sm
                                                    font-medium
                                                    text-center
                                                    ${item.status === "completed"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                    }
                                                `}
                                            >
                                                {item.status}
                                            </span>

                                            <div className='
                                                flex items-center gap-2
                                                text-gray-400 text-sm
                                            '>

                                                <FaClock />

                                                AI Generated Report

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>
                }

            </div>

        </div>
    )
}

export default InterviewHistory