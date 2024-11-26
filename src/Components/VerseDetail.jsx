import React, { useEffect, useState } from 'react'
import { options } from '../utils/fetchData'
import { useParams } from 'react-router'
function VerseDetail() {
    const {id,verseNo}=useParams()
    const [detail,setDetail]=useState([])
    const fetchDetail=async()=>{
      const data=  await  fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${verseNo}/`,options)
      const res= await data.json()
      setDetail(res)
      console.log(res)
    }
    useEffect(()=>{
fetchDetail()
    },[id,verseNo])
  return (
    <div>
      Details
    </div>
  )
}

export default VerseDetail
