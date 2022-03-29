import React from 'react';
import "./Cars.css"

class Cars extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            brand: '',
            quantity: '',
            showroom: [],
            godown: [],
            errors: {
                name: false,
                brand: false,
                quantity: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, brand, quantity, showroom, godown } = this.state;

        //Validate here

        this.setState({
            errors: {
                name: name === "",
                brand: brand === "",
                quantity: quantity === ""
            }
        })


        const data = { name: name, brand: brand, quantity: quantity };

        if (quantity > 3) {
            const temp_data = godown;
            temp_data.push(data)
            this.setState({ godown: temp_data })
        } else {
            const temp_data = showroom;
            temp_data.push(data)
            this.setState({ showroom: temp_data })
        }
    }

    handleChange(e) {
        const ele = e.target
        const name = ele.name;
        const value = ele.value;

        this.setState({ [name]: value });
    }

    renderTableData(data) {
        console.log(data);
        const a = [];
        data.forEach((obj) => {
            a.push(
                <tr>
                    <td>{obj.brand}</td>
                    <td>{obj.name}</td>
                    <td>{obj.quantity}</td>
                </tr>
            )
        });
        console.log(a);
        return a;
    }

    render() {
        const { showroom, godown } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Car Brand</h3>
                    <p><input name="brand" onChange={this.handleChange} className={
                        this.state.errors.brand ? 'error' : ''
                    }></input>{this.state.errors.brand
                        && <div className="errorMessage">Required
                            field</div>}</p>
                    <h3>Car Name</h3>
                    <p><input name="name" onChange={this.handleChange} className={
                        this.state.errors.name ? 'error' : ''
                    }></input>{this.state.errors.name
                        && <div className="errorMessage">Required
                            field</div>} </p>
                    <h3>Car Quantity</h3>
                    <p><input name="quantity" type="number" onChange={this.handleChange} className={
                        this.state.errors.quantity ? 'error' : ''
                    }></input>{this.state.errors.quantity
                        && <div className="errorMessage">Required
                            field</div>}</p>

                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
                <div className="tables">
                    <h3>Godowm</h3>
                    <table className='content-table'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Brand</td>
                                <td>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData(godown)}
                        </tbody>
                    </table>
                </div>
                <div className="tables">
                    <h3>Showroom</h3>
                    <table className='content-table'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Brand</td>
                                <td>Quantity</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData(showroom)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Cars;



































/*

class CarInput extends Component {
    constructor() {
        super();
        this.state = {
            carBrand: '',
            carName: '',
            carQuantity: '',
            errors: {
                carBrand: false,
                carName: false,
                carQuantity: false
            }
        };
    }
    handleOnChange = e => {
        const { target: { value, name } } = e;
        console.log(name, value)
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleOnSubmit = e => {
        
        e.preventDefault();
        const { carBrand, carName, carQuantity } = this.state
        // If carbrand or car name is missing we add an error class
        this.setState({
            errors: {
                carBrand: carBrand === '',
                carName: carName === '',
                carQuantity : carQuantity === ""
            }
        });
        const data = {
            carBrand,
            carName,
            carQuantity
        };
        console.log('Data:', data);
    }


    render() {
        return (
            <div className="cars">
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <p><strong>Car Brand:</strong></p>
                        <input
                            name="brand"
                            type="text"
                            value={this.state.carBrand}
                            onChange={this.handleOnChange}
                            className={
                                this.state.errors.carBrand ? 'error' : ''
                            }
                        />
                        {this.state.errors.carBrand
                            && <div className="errorMessage">Required
                                field</div>}
                    </div>
                    <div>
                        <p><strong>Car Name:</strong></p>
                        <input
                            name="name"
                            type="text"
                            value={this.state.carName}
                            onChange={this.handleOnChange}
                            className={
                                this.state.errors.carName ? 'error' : ''
                            }
                        />
                        {this.state.errors.carName
                            && <div className="errorMessage">Required
                                field</div>}
                    </div>
                    <div>
                        <p><strong>Car Quantity:</strong></p>
                        <input
                            name="quantity"
                            type="number"
                            value={this.state.carQuantity}
                            onChange={this.handleOnChange}
                            className={
                                this.state.errors.carQuantity ? 'error' : ''
                            }
                        />
                            {this.state.errors.carQuantity
                            && <div className="errorMessage">Required
                                field</div>}
                    </div>
                    <input type="submit" value="submit">Submit</input>
                </form>
            </div>
        );
    }
}
export default CarInput;

*/























/*function CarsInput() {

    const [details, setDetails] = useState({
        carBrand: "",
        carName: "",
        quantityReceived: ""
      });

      const [carList, setCarList] = useState([]);


     function handleOnChange(event){
        const {value, name } = event.target;
         setDetails( prevValue => {
             if ( name === "brand"){
                 return ({
                     carBrand : value,
                     carName : prevValue.carName,
                     quantityReceived : prevValue.quantityReceived

                 });
                }
                 else if (name === "name"){
                    return {
                     carBrand : prevValue.carBrand,
                     carName : value,
                     quantityReceived : prevValue.quantityReceived
                    };
                 }else if(name === "quantity") {
                    return {
                        carBrand : prevValue.carBrand,
                        carName : prevValue.carName,
                        quantityReceived : value
                       };
                 }
             }
            }


     function handleOnChange(event){

        event.preventDefault();

        setCarList([...carList, details])
        console.log("carlist:",carList)
     }
    
    return (
        <div>
            
                <div>
                    <p><strong>Car Brand:</strong></p>
                    <p>
                        <input name="brand" type="text" onChange={handleOnChange} />
                    </p>
                </div>
                <div>
                    <p><strong>Car Name:</strong></p>
                    <p>
                        <input name="name" type="text" onChange={handleOnChange} />
                    </p>
                </div>
                <div>
                    <p><strong>Car Quantity:</strong></p>
                    <p>
                        <input name="quantity" type="number" onChange={handleOnChange} />
                    </p>
                </div>
                <p>
                        <button onClick={handleOnChange}>Submit</button>
                    </p>
           
        </div>
    )
} */