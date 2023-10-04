import carro from './assets/carro.ico'
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className='m-5'>
            <img src={carro} alt="carro" />
            0
        </div>
    )
}

export default CartWidget