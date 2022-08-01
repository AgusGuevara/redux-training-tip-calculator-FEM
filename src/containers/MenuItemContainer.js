import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { removeItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { uuid } = ownProps;
  return {
    remove: () => dispatch(removeItem(uuid))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
