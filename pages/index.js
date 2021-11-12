import React from "react";
import { connect } from "react-redux";
class Index extends React.Component {
  render() {
    console.log("this.props from index", this.props);
    return (
      <div className={"h-screen dark:bg-black dark:text-white bg-red-300"}>
        Hello
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state: state,
  };
}
export default connect(mapStateToProps)(Index);
