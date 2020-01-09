import React, { Component } from "react";
import ListItem from "./ListItem";
import {connect} from 'react-redux';
export class List extends Component {
  render() {
    // console.log(this.props.product);
    var showList = this.props.product.map((todo, index)=>{
      return <ListItem key={index} todo={todo} index={index}/>
  })
    return (
      <div className="">
        <table className="table ">
         
          {showList}
          
        </table>
      </div>
    );
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    product: state.lists.product
  }
}

export default connect(mapStateToProps, null )(List)

