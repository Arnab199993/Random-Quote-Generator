import React, { useEffect, useState } from 'react'
import "./Quotes.css"
import axios from "axios"
const Quotes = () => {
    const [quotes, setquotes] = useState("")
    const [author, setauthor] = useState("")
    const getquote = (() => {
        axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(response => response)
            .then(data => {
                const dataQuote = data.data.quotes
                const randomnumber = Math.floor(Math.random() * dataQuote.length)
                const randomQuote = dataQuote[randomnumber]
                setquotes(randomQuote.quote)
                setauthor(randomQuote.author)
            })
    })
    useEffect(() => {
        getquote()
    }, [])
    const Click = (() => {
        getquote()
    })
    return (
        <div className='Quotes-box'>
            <h1>{quotes}</h1>
            <div className='Author'><p>{author}</p></div>
            <div className="buttons">
                <div className="social-media">
                    <a href={`https://twitter.com/compose/tweet?text=${quotes} Author: ${author}`} target={"_blank"} className='tweet-quote'>
                        <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU" /></span>
                    </a>
                    <a href={`https://www.tumblr.com/new/text?text=Hello`} target={"_blank"} className='tumblr-quote'>
                        <span><img src="http://store-images.s-microsoft.com/image/apps.7771.14420356529270456.a0e62d2f-10e7-480b-b5a1-cb70a39b4d1b.c709c9e1-9ae6-4ef8-b83b-802b291f1380" /></span>
                    </a>
                </div>
                <button onClick={Click} className="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default Quotes