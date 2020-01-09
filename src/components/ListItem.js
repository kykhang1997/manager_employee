import React, { Component } from "react";
import { connect } from "react-redux";
import { del_list, toggle, close } from "../actions/actions";
export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkDetails : false,
    }
  }
  isCheck  = () => {
    if(this.state.checkDetails){
      this.setState({
        checkDetails:false,
      })
    } else {
      this.setState({
        checkDetails: true,
      })
    }
    
  }
  
  
  render() {
    let { id, title, details } = this.props.todo;
    var hiden = this.state.checkDetails ? 'showDetails' : 'hiddenDetails';
    return (
      <tbody>
        <tr>
          <td>{title}</td>
          <td className={hiden}>
            {details}
            
          </td>

          <td>
            <button onClick={()=>this.isCheck()}>Show Details</button>
            <button onClick={() => this.props.del(id)}>Remove Note</button>
          </td>
        </tr>
      </tbody>
    );
  }
}
const mapStateToProps = state => {
  return {
    display: state.isdisplay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    del: id => {
      dispatch(del_list(id));
    },
    open: () => {
      dispatch(toggle());
    },
    closes: () => {
      dispatch(close());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
