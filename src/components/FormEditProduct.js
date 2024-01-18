import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { read, update } from '../functions/product'


const FormEditProduct = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        name:" ",
        detail:" ",
        price:" "
    })
    const {name, detail, price} = data;


    useEffect(() => {
        loadData(params.id)
    }, [])



    const loadData = async (id) => {
        read(id)
            .then((res) => {
                setData(res.data)
            })
    }

    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        update(params.id,data)
        .then(res => {
            console.log(res.data)
            navigate('/')
        })
        .catch((err) => console.log(err))
    }


    return (
        <div>
            FormEditProduct
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={name} onChange={e => handleChange(e)} placeholder='name' /> <br />
                <input type='text' name='detail' value={detail} onChange={e => handleChange(e)} placeholder='detail' /> <br />
                <input type='text' name='price' value={price} onChange={e => handleChange(e)} placeholder='price' /> <br />
                <button>Submit</button>
            </form>








        </div>
    )
}






export default FormEditProduct