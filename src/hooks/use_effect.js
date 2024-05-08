import React, { useState, useEffect, useContext } from "react"

const UseEffectDemo = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {

        // component did mount
        window.addEventListener("resize", updateWindowWidth)

        // component unmount
        return () => {
            window.removeEventListener("resize", updateWindowWidth)
        }

    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`).
        then(response => response.json()).
        then(data => {
            setItems(data);
            console.log(data);
        })
    }, [resourceType])

    return (
        <>
            <p>Window Width: {windowWidth}</p>
            <p>resource: {resourceType}</p>
            {items.slice(0, 2).map(item => {
                return <div key={item.id}>{item.id} {item.title ? item.title.slice(0, 15):
                        item.name.slice(0, 15)}</div>
            })}            
            <button onClick={() => setResourceType('posts')}>POSTS</button>
            <button onClick={() => setResourceType('users')}>USERS</button>
        </>
    )


}

export { UseEffectDemo }