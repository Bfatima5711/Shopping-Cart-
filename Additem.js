import React from 'react';

class Additem extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            productName: "",
            productPrice: 0,

         } 
    }
    state = {  } 
    render() { 
        return (<form className='row mb-5' onSubmit={(evnt) => {
                evnt.preventDefault();
                this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}>
            <div className="mb-3 col-5">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="name"
                name="productName"
                onChange={(evnt) => {
                    this.setState({productName: evnt.currentTarget.value});
                }}

                value={this.state.productName}
              />
            </div>
            <div className="mb-3 offset-2 col-2">
              <label htmlFor="inputPrice" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="inputPrice"
                name="productPrice"
                onChange={(evnt) => {
                    this.setState({productPrice: Number(evnt.currentTarget.value)})
                }}

                value={this.state.productPrice}
              />
            </div>
            <button type="submit" className="btn btn-secondary offset-2 col-1" >
              Add Item
            </button>
          </form>
          );
    }
}
 
export default Additem;