import React, { useState } from 'react';
import Pagination from './Pagination';
import useFetch from '../hooks/useFetch';
import { Table , Badge } from 'react-bootstrap';
import { css } from '@emotion/css';

const Home = () => {
    const [comments , loading , error] = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [startRow , setStartRow] = useState(0);
    const [endRow , setEndRow] = useState(startRow + 20);

    if (loading) {
        return <h3 className={message}>Loading...</h3>
    }

    if (error) {
        return <h4 className={message}>{error}</h4>
    }

    return (
        <div className={homeContainer}>
            <Table className='striped bordered hover table-secondary p-2'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                {
                    comments.slice(startRow , endRow).map(comment => {
                        return (
                            <tr key={comment.id}>
                                <td><Badge>{comment.id}</Badge></td>
                                <td>{comment.title}</td>
                                <td>{comment.completed ? <Badge bg='success'>true</Badge> : <Badge bg='danger'>false</Badge>}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <Pagination total={comments.length} start={startRow} end={endRow}
            setStart={setStartRow} setEnd={setEndRow}/>
        </div>
    )
}

const homeContainer = css`
    width: 100%;
    padding: 10px 20px 40px 20px;

    th , td {
        text-align: center;
    }
`

const message = css`
    text-align: center;
    margin-top: 50px;
`

export default Home;