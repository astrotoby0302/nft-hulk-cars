import { Button, Form, Nav } from "react-bootstrap"
import { BsGear, BsList, BsMoon, BsWalletFill } from "react-icons/bs";
import '../assets/scss/RightBarNav.scss'
import { useContext, useState } from "react";
import ResponsiveLeftBar from "../pages/ResponsiveLeftBar";
import Logo from '../assets/images/logo.png';

import WalletModal from "./WalletModal";
import { CarContext } from "../context/CarContext";

const RightBar = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { account, handleLeftBarShow } = useContext(CarContext);

    return (
        <Nav className="right-bar-nav">
            <div className="d-flex align-items-center gap-2 btn-responsive">
                <BsList onClick={handleLeftBarShow} />
                <img src={Logo} width="20" height="20" alt="" />
                <Form.Text>HulkCars NFT</Form.Text>
            </div>
            <Nav.Item>
                <Button className="btn-dark"><BsMoon /></Button>
            </Nav.Item>
            <Nav.Item>
                <Button className="btn-setting"><BsGear /></Button>
            </Nav.Item>
            <Nav.Item>
                <Button className="btn-wallet" onClick={handleShow}><BsWalletFill />
                    {account ? account.replace(/(.{4}).*(.{4})/, "$1...$2") : 'Connect Wallet'}
                </Button>
            </Nav.Item>
            <ResponsiveLeftBar />
            <WalletModal show={show} handleClose={handleClose} />
        </Nav>
    )
}

export default RightBar;