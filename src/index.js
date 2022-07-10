import ReactDOM from 'react-dom/client';

function Product(props){
    const notif = ()=>{
        return alert (`Produk ini bernama ${props.name}`)
    }
    
    return (
        <>
            <h4>{props.name}</h4>
            <button onClick={notif}>Detail</button>
        </>    
    )
}

function Home(){
    return(
        <>
            <Product name="Product 1"/>
            <Product name="Product 2"/>
            <Product name="Product 3"/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);