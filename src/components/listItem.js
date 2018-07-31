import React, { Component } from "React";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { CardSection } from "./common";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library;
    const { titleStyle } = styles;
    const { selectLibrary } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
