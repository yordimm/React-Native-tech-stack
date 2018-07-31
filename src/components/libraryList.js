import React, { Component } from "react";
import { connect } from "react-redux";
import { ListView } from "react-native";
import ListItem from "./listItem";

class LibraryList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
        dataSource: ds.cloneWithRows(this.props.libraries),
      };
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }
  render() {
  return (<ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />);
  }
}
const mapStateProps = state => {
  return { libraries: state.libraries };
};
export default connect(mapStateProps)(LibraryList);
