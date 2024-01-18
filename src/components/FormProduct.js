import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { remove ,create, getData } from '../functions/product'
import { Link } from 'react-router-dom'


const FormProduct = () => {
    //javascript

    const ball = 'Test ball'

    const [data, setData] = useState([])
    const [form, setForm] = useState({})

    useEffect(() => {
        // code
        loadData()


    }, [ ])

    const loadData = async () => {
        getData()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        create(form)
            .then(res => {
                console.log(res.data)
                loadData()
            })
            .catch((err) => console.log(err))
    }

    const handleRemove = async (id) => {
        remove(id)
            .then((res) => {
                console.log(res);
                loadData()
            })
            .catch((err) => console.log(err))
    }

    var testdb = "select * from ballDB"


    return (
        <div>
            {/* HTML */}
            FormProduct

            <form name='from__create' onSubmit={handleSubmit}>
                <input type='text' name='name' onChange={e => handleChange(e)} placeholder='name' /> <br />
                <input type='text' name='detail' onChange={e => handleChange(e)} placeholder='detail' /> <br />
                <input type='text' name='price' onChange={e => handleChange(e)} placeholder='price' /> <br />
                <button>Submit</button>
            </form>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Price</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {

                        data ? data.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td scope="row">{item.name}</td>
                                <td>{item.detail}</td>
                                <td>{item.price}</td>
                                <td onClick={() => handleRemove(item._id)}>delete </td>
                                <td>
                                    <Link to={'/edit/' + item._id}>Edit</Link>

                                </td>
                            </tr>

                        )
                            : null


                    }

                </tbody>
            </table>
                






        </div>
    )
}





export default FormProduct