"use client"

import { IgLogo } from '../icons'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import { Textfit } from 'react-textfit'
import styles from './ModCalc.module.css'

export const ModCalc = () => {
    const [base, setBase] = useState(5)
    const [exponent, setExponent] = useState(3)
    const [modulus, setModulus] = useState(23)
    const [result, setResult] = useState(10)
    const [nonsense, setNonsense] = useState(false)
    const calculatePowerMod = () => {
        const b = BigInt(base)
        const e = BigInt(exponent)
        const m = BigInt(modulus)

        const res = b ** e % m
        setResult(Number(res))
    }

    useEffect(() => {
        // Call calculatePowerMod whenever base, exponent, or modulus changes
        if (!isNaN(base) && !isNaN(exponent) && modulus) {
            setNonsense(false)
            calculatePowerMod()
        } else {
            setNonsense(true)
        }
    }, [base, exponent, modulus])

    return (
        <div className={styles.container}>
            <h1
                className={cn(
                    styles.title,
                    'nextra-focus _flex _items-center hover:_opacity-75 ltr:_mr-auto rtl:_ml-auto'
                )}
            >
                <IgLogo height="32" />
                <span className="_font-extrabold _text-xl sm:_text-2xl _text-white">
                    Power Mod Calculator
                </span>
            </h1>

            <Textfit mode="single" className={styles.equation}>
                <span className={styles.basisColor}>g</span>
                <sup className={styles.exponentColor}>k</sup> mod{' '}
                <span className={styles.modulusColor}>n</span> ={' '}
                <span className={styles.resultColor}>K</span>
            </Textfit>
            <div className={styles.equationWrapper}>
                <Textfit
                    mode="single"
                    max="30"
                    className={cn(styles.equation, nonsense && styles.nonsense)}
                >
                    <span className={styles.basisColor}>
                        {isNaN(base) ? 'g' : base}
                    </span>
                    <sup className={styles.exponentColor}>
                        {isNaN(exponent) ? 'k' : exponent}
                    </sup>{' '}
                    mod{' '}
                    <span className={styles.modulusColor}>
                        {isNaN(modulus) ? 'n' : modulus}
                    </span>{' '}
                    = <span className={styles.resultColor}>{result}</span>
                </Textfit>

                {nonsense && (
                    <div className={styles.warning}>
                        Let's try not to break maths 😬👍
                    </div>
                )}
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.basisColor}>Basis g</label>
                <input
                    type="number"
                    value={base}
                    onChange={e => setBase(parseInt(e.target.value))}
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.exponentColor}>Exponent k</label>
                <input
                    type="number"
                    value={exponent}
                    onChange={e => setExponent(parseInt(e.target.value))}
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.modulusColor}>Modulus n</label>
                <input
                    type="number"
                    value={modulus}
                    onChange={e => setModulus(parseInt(e.target.value))}
                />
            </div>
        </div>
    )
}

export default ModCalc
