import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import capsulaindica from '../img/capsula_indica.jpeg'
import capsulas from '../img/capsulas_todas_chica.jpeg'
import logo from '../img/krazylogo.JPG';
import chibrida from '../img/capsula_hibrida.jpeg'
import CardGroup from 'react-bootstrap/CardGroup';
import full from '../img/vaposYcapsulas.jpeg'
import './Components.css'
import CardImg from 'react-bootstrap/esm/CardImg';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function ModalComprar({stock}) {
    const [show, setShow] = useState(false);

    const [contador, setContador] = useState(1)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function sumar_contador(){
        if (contador < stock) {
            setContador(contador + 1)
        }
        
    }

    function restar_contador(){
        if(contador>1){
        setContador(contador - 1)
    }}

    return (
        <>
        <Button variant="dark" onClick={handleShow}>
            Comprar Capsulas
        </Button>

        <Modal size="lg" style={{backgroundImage: `url(${full})`, height:"100%", width:"100%" }} bg="dark" show={show}  onHide={handleClose}>
        
        <Row style={{backgroundImage:`url(${logo})` }} >
        <Col  >
        <Card style={{backgroundImage: `url(${capsulas})`,height:"100%", width:"100%"}} >
        <div  style={{height:"400px", width:"100%", display:'flex', alignItems:'flex-end', justifyContent:'space-around'}} >
            <CardHeader variant='bottom' >
                <Button style={{height:'50%', width:'20%'}}  variant="secondary" onClick={sumar_contador}>+</Button>
                <Button style={{height:'100%', width:'60%'}}  variant="secondary" >{contador}</Button>
                <Button style={{height:'100%', width:'20%'}}  variant="secondary" onClick={restar_contador}>-</Button>
                <Button style={{height:'100%', width:'100%', alignSelf:'center'}}  variant="secondary" onClick={handleClose}>Comprar</Button>
            </CardHeader>
        </div>
        </Card>
        
        
        </Col  >
        <Col >
        <Card style={{backgroundImage: `url(${capsulaindica})`,height:"100%", width:"100%"}} >
        <div  style={{height:"100%", width:"100%", display:'flex', alignItems:'flex-end', justifyContent:'space-around'}} >
            <CardHeader variant='bottom' >
                <Button style={{height:'50%', width:'20%'}}  variant="secondary" onClick={sumar_contador}>+</Button>
                <Button style={{height:'100%', width:'60%'}}  variant="secondary" >{contador}</Button>
                <Button style={{height:'100%', width:'20%'}}  variant="secondary" onClick={restar_contador}>-</Button>
                <Button style={{height:'100%', width:'100%', alignSelf:'center'}}  variant="secondary" onClick={handleClose}>Comprar</Button>
            </CardHeader>
        </div>
        </Card>
        </Col>
        <Col >
        <Card style={{backgroundImage: `url(${capsulas})`,height:"100%", width:"100%"}} >
        <div  style={{height:"100%", width:"100%", display:'flex', alignItems:'flex-end', justifyContent:'space-around'}} >
            <CardHeader variant='bottom' >
                <Button style={{height:'50%', width:'20%'}}  variant="secondary" onClick={sumar_contador}>+</Button>
                <Button style={{height:'100%', width:'60%'}}  variant="secondary" >{contador}</Button>
                <Button style={{height:'100%', width:'20%'}}  variant="secondary" onClick={restar_contador}>-</Button>
                <Button style={{height:'100%', width:'100%', alignSelf:'center'}}  variant="secondary" onClick={handleClose}>Comprar</Button>
            </CardHeader>
        </div>
        </Card>
        </Col>

        </Row>

        </Modal>
        </>
    );
    }
