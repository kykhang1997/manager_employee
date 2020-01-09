import React, { Component } from "react";
import { connect } from "react-redux";
import { add_list } from "../actions/actions";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.mytitle = React.createRef();
    this.mydetails = React.createRef();
    this.state = {
      title: "",
      prevPropsTodoID: "",
      is_update: false,
      details:"",
    };
  }

  render() {
    return (
      <div className="form-group text-center">
        <h1 className="text-center">Timestamped Notes App</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            var titleproduct = this.mytitle.current.value;
            var detailsproduct = this.mydetails.current.value;
            this.props.add(titleproduct, detailsproduct);
          }}
        >
          <input
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Note Title"
            ref={this.mytitle}
          />
          <textarea
            type="text"
            className="form-control"
            aria-describedby="helpId"
            placeholder="Note Details"
            ref={this.mydetails}
          />
          <button>Add Note</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (title, details) => {
      dispatch(add_list(title, details));
    }
  };
};

export default connect(null, mapDispatchToProps)(Form);
