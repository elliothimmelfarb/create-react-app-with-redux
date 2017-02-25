import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as peopleActions from '../Actions/people.actions';
import PeopleList from '../Components/PeopleList';
import PersonInput from '../Components/PersonInput';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  render() {
    const { people } = this.props;

    return (
      <div>
        <PersonInput addPerson={this.props.addPerson} />
        <PeopleList people={people} />
      </div>
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  addPerson: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = dispatch => ({
  addPerson: person => dispatch(peopleActions.addPerson(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
