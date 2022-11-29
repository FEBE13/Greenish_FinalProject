import React from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getArticles } from "../Redux/Action/ArticlesAction"
import Navi from '../Components/Navi'
import Footer from '../Components/Footer'

function DetailArticles() {
    const { pathname} = useLocation()
    const { id } = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.Articles)
    const articles = data.articles
    console.log(articles);
  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default DetailArticles