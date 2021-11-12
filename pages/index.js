import React from "react";
import { connect } from "react-redux";
class Index extends React.Component {
  render() {
    return (
      <div className={"h-screen dark:bg-black dark:text-white bg-red-300"}>
        Hello
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    state: state.auth,
  };
}
export default connect(mapStateToProps)(Index);
