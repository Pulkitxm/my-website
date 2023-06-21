import React from 'react';
import './backend.css';
import img from '../../../../assets/tick.png';

const Backend = () => {
    return (
        <div className='tbl'>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} >
                            Backend Developer
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='item' >
                                <img src={img} alt="" /> Php
                            </div>
                        </td>
                        <td>
                            <div className='item' >
                                <img src={img} alt="" /> Mysql
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='item' >
                                <img src={img} alt="" /> Nodejs
                            </div>
                        </td>
                        <td>
                            <div className='item' >
                                <img src={img} alt="" /> Fireebase
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='item' >
                                <img src={img} alt="" /> Python
                            </div>
                        </td>
                        <td>
                            <div className='item' >
                                <img src={img} alt="" /> SQL
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Backend;
