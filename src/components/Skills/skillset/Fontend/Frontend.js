import React from 'react';
import './frontend.css';
import img from '../../../../assets/tick.png';

const Frontend = () => {
    return (
        <div className='tbl'>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} >
                            Frontend Developer
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                             <div className='item' >
                                <img src={img} alt="" /> html
                             </div>
                        </td>
                        <td>
                             <div className='item' >
                                <img src={img} alt="" /> bootstrap
                             </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                             <div className='item' >
                                <img src={img} alt="" /> css
                             </div>
                        </td>
                        <td>
                             <div className='item' >
                                <img src={img} alt="" /> git
                             </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                             <div className='item' >
                                <img src={img} alt="" /> javascipt
                             </div>
                        </td>
                        <td>
                             <div className='item' >
                                <img src={img} alt="" /> react
                             </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Frontend;
