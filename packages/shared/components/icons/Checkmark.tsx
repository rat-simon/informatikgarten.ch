import { motion } from 'motion/react'

export const Checkmark = ({ height = '1rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="CheckIcon"
            height={height}
        >
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{
                    type: 'tween',
                    duration: 0.3,
                    ease: 'easeIn'
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    )
}
