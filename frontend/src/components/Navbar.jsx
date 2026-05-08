import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { motion } from "motion/react"
import { AnimatePresence } from "framer-motion"

import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';

import AuthModel from './AuthModel';

function Navbar() {

    const { userData } = useSelector((state) => state.user)

    const [showCreditPopup, setShowCreditPopup] = useState(false)
    const [showUserPopup, setShowUserPopup] = useState(false)
    const [showAuth, setShowAuth] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {

        try {

            await axios.get(
                ServerUrl + "/api/auth/logout",
                { withCredentials: true }
            )

            dispatch(setUserData(null))

            setShowCreditPopup(false)
            setShowUserPopup(false)

            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className='
            bg-gradient-to-b from-green-50 via-white to-white
            flex justify-center px-4 pt-6
            relative overflow-visible
        '>

            {/* BACKGROUND BLUR EFFECTS */}
            <div className='absolute top-[-120px] left-[-120px] w-72 h-72 bg-green-200/30 blur-3xl rounded-full'></div>

            <div className='absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-green-100/30 blur-3xl rounded-full'></div>

            {/* NAVBAR */}
            <motion.div

                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}

                className='
                    relative z-20
                    w-full max-w-6xl
                    bg-white/90 backdrop-blur-xl
                    rounded-[28px]
                    border border-green-100
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    px-8 py-4
                    flex justify-between items-center
                '
            >

                {/* LEFT SECTION */}
                <motion.div

                    whileHover={{ scale: 1.03 }}

                    onClick={() => navigate("/")}

                    className='flex items-center gap-3 cursor-pointer'
                >

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

                        <BsRobot size={18} />

                    </motion.div>

                    <div>

                        <h1 className='font-bold text-lg text-gray-800 hidden md:block'>
                            MockMentor
                        </h1>

                        <p className='text-xs text-green-600 hidden md:block'>
                            AI Powered Interview System
                        </p>

                    </div>

                </motion.div>

                {/* RIGHT SECTION */}
                <div className='flex items-center gap-5 relative'>

                    {/* LIVE STATUS */}
                    <motion.div

                        whileHover={{ scale: 1.03 }}

                        className='
                            hidden lg:flex
                            items-center gap-2
                            bg-green-50
                            border border-green-100
                            px-4 py-2
                            rounded-full
                        '
                    >

                        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>

                        <span className='text-sm font-medium text-green-700'>
                            AI Active
                        </span>

                    </motion.div>

                    {/* CREDIT BUTTON */}
                    <div className='relative'>

                        <motion.button

                            whileHover={{
                                scale: 1.05,
                                y: -2
                            }}

                            whileTap={{
                                scale: 0.96
                            }}

                            onClick={() => {

                                if (!userData) {
                                    setShowAuth(true)
                                    return
                                }

                                setShowCreditPopup(!showCreditPopup)
                                setShowUserPopup(false)

                            }}

                            className='
                                relative overflow-hidden
                                flex items-center gap-2
                                bg-gradient-to-r from-green-500 to-emerald-600
                                text-white
                                px-5 py-2.5
                                rounded-full
                                shadow-lg
                                font-medium
                            '
                        >

                            {/* SHINE EFFECT */}
                            <motion.div

                                animate={{
                                    x: ["-100%", "250%"]
                                }}

                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}

                                className='
                                    absolute inset-0
                                    bg-white/20
                                    skew-x-12
                                    w-1/3
                                '
                            />

                            <BsCoin size={20} />

                            {userData?.credits || 0}

                        </motion.button>

                        {/* CREDIT POPUP */}
                        <AnimatePresence>

                            {showCreditPopup && (

                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    }}

                                    exit={{
                                        opacity: 0,
                                        y: 10
                                    }}

                                    transition={{
                                        duration: 0.2
                                    }}

                                    className='
                                        absolute right-[-40px]
                                        mt-4
                                        w-72
                                        bg-white
                                        border border-green-100
                                        rounded-3xl
                                        p-5
                                        shadow-2xl
                                        z-[999]
                                    '
                                >

                                    <div className='flex items-center gap-3 mb-4'>

                                        <div className='bg-green-100 text-green-600 p-3 rounded-2xl'>
                                            <MdWorkspacePremium size={22} />
                                        </div>

                                        <div>

                                            <h3 className='font-semibold text-gray-800'>
                                                Premium Credits
                                            </h3>

                                            <p className='text-xs text-gray-500'>
                                                Unlock more AI interviews
                                            </p>

                                        </div>

                                    </div>

                                    <div className='bg-green-50 rounded-2xl p-4 border border-green-100 mb-4'>

                                        <p className='text-sm text-gray-700 leading-relaxed'>
                                            Buy credits to continue advanced mock interviews,
                                            AI analysis and detailed reports.
                                        </p>

                                    </div>

                                    <motion.button

                                        whileHover={{ scale: 1.02 }}

                                        whileTap={{ scale: 0.98 }}

                                        onClick={() => navigate("/pricing")}

                                        className='
                                            w-full
                                            bg-gradient-to-r from-green-500 to-emerald-600
                                            text-white
                                            py-3
                                            rounded-2xl
                                            shadow-md
                                            font-medium
                                        '
                                    >

                                        Buy More Credits

                                    </motion.button>

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                    {/* USER BUTTON */}
                    <div className='relative'>

                        <motion.button

                            whileHover={{
                                scale: 1.08,
                                rotate: 3
                            }}

                            whileTap={{
                                scale: 0.95
                            }}

                            onClick={() => {

                                if (!userData) {
                                    setShowAuth(true)
                                    return
                                }

                                setShowUserPopup(!showUserPopup)
                                setShowCreditPopup(false)

                            }}

                            className='
                                relative
                                w-11 h-11
                                bg-gradient-to-r from-black to-gray-800
                                text-white
                                rounded-full
                                flex items-center justify-center
                                font-semibold
                                shadow-lg
                                border-2 border-white
                            '
                        >

                            {userData ? (
                                <>
                                    {userData?.name?.slice(0, 1).toUpperCase()}

                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full'></div>
                                </>
                            ) : (
                                <FaUserAstronaut size={16} />
                            )}

                        </motion.button>

                        {/* USER POPUP */}
                        <AnimatePresence>

                            {showUserPopup && (

                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                        scale: 0.95
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    }}

                                    exit={{
                                        opacity: 0,
                                        y: 10
                                    }}

                                    transition={{
                                        duration: 0.2
                                    }}

                                    className='
                                        absolute right-0
                                        mt-4
                                        w-56
                                        bg-white
                                        border border-green-100
                                        rounded-3xl
                                        p-5
                                        shadow-2xl
                                        z-[999]
                                    '
                                >

                                    <div className='pb-4 border-b border-gray-100 mb-4'>

                                        <div className='flex items-center gap-3'>

                                            <div className='
                                                w-12 h-12
                                                rounded-full
                                                bg-gradient-to-r from-green-500 to-emerald-600
                                                text-white
                                                flex items-center justify-center
                                                font-bold
                                                shadow-md
                                            '>

                                                {userData?.name?.slice(0, 1).toUpperCase()}

                                            </div>

                                            <div>

                                                <p className='font-semibold text-gray-800'>
                                                    {userData?.name}
                                                </p>

                                                <p className='text-xs text-green-600'>
                                                    AI Candidate
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    <motion.button

                                        whileHover={{ x: 5 }}

                                        onClick={() => navigate("/history")}

                                        className='
                                            w-full
                                            text-left
                                            text-sm
                                            py-3 px-3
                                            rounded-xl
                                            hover:bg-green-50
                                            text-gray-700
                                            transition
                                        '
                                    >

                                        Interview History

                                    </motion.button>

                                    <motion.button

                                        whileHover={{ x: 5 }}

                                        onClick={handleLogout}

                                        className='
                                            w-full
                                            text-left
                                            text-sm
                                            py-3 px-3
                                            rounded-xl
                                            flex items-center gap-2
                                            hover:bg-red-50
                                            text-red-500
                                            transition
                                        '
                                    >

                                        <HiOutlineLogout size={16} />

                                        Logout

                                    </motion.button>

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                </div>

            </motion.div>

            {/* AUTH MODAL */}
            {showAuth && (
                <AuthModel onClose={() => setShowAuth(false)} />
            )}

        </div>
    )
}

export default Navbar