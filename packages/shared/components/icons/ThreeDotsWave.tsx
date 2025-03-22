import { motion, Transition } from 'motion/react'
import React from 'react'

const LoadingDot = {
    display: 'block',
    width: '20%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: '50%'
}

const LoadingContainer: React.CSSProperties = {
    width: '1rem',
    height: '1rem',
    display: 'flex',
    justifyContent: 'space-around'
}

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const DotVariants = {
    initial: {
        y: '0%'
    },
    animate: {
        y: '100%'
    }
}

const DotTransition: Transition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    repeatDelay: 0.5,
    ease: 'easeInOut'
}

export function ThreeDotsWave() {
    return (
        <motion.div
            style={LoadingContainer}
            variants={ContainerVariants}
            initial="initial"
            animate="animate"
        >
            <motion.span
                style={LoadingDot}
                variants={DotVariants}
                transition={DotTransition}
            />
            <motion.span
                style={LoadingDot}
                variants={DotVariants}
                transition={DotTransition}
            />
            <motion.span
                style={LoadingDot}
                variants={DotVariants}
                transition={DotTransition}
            />
        </motion.div>
    )
}
