import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendProposalToDatabase } from '../actions/proposalActions';
import ProposalForm from '../components/ProposalForm';

const mapStateToProps = (state) => {
  const currentUser = state.currentUser;
  const targetProposal = state.targetProposal;
  return {
    currentUser,
    targetProposal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitProposal: (proposal) => {
      dispatch(sendProposalToDatabase(proposal))
    }
  }};

export default connect(mapStateToProps, mapDispatchToProps)(ProposalForm)
