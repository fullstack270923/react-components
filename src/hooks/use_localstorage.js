
import React, {useState} from "react"
import {useEffect} from 'react'


const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState (() => {
        const savedValue = localStorage.getItem(key) 
        if (savedValue) {
            const result = JSON.parse(savedValue)
            console.log(result);
            return result
        }

        // case where the initial value is a function
        if (initialValue instanceof Function) return initialValue()

        return initialValue
    })


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])


    return [value, setValue]
}

export {useLocalStorage}

// user['name'] = 'danny'
// user.name = 
// localStorage.setItem('name', 'danny')
// localStorage.getItem('name')