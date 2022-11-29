import React,{ useState,useEffect } from 'react'
import Restrntcard from './Restrntcard'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {restrntlistAction} from '../Actions/restrntListAction';
import { useDispatch, useSelector } from 'react-redux';


function Resturantslist() {
    //create state to hold all restrnt
    const [allRestrnts,setRestrnt]=useState([])

    //fn for api call to get all restrnts.json
    // const getRestrnts = async()=>{
    //    await fetch('/db.json')
    //    .then((data)=>{
    //     data.json()
    //     .then((result)=>{
    //         setRestrnt(result.restaurants);
    //     })
    // })
    // }

    const dispatch = useDispatch()

    //useSelector used to get value from store
    const result= useSelector(state=>state.restrntlistReducer)
    console.log(result);
    //destructuring to get result in view
    const {restrntList}=result

    useEffect(()=>{
        //getRestrnts()
        dispatch(restrntlistAction())
    },[])

    return (
        <Row>
            {
                restrntList.map(item=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                     <Restrntcard restrnt={item}/>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Resturantslist


















