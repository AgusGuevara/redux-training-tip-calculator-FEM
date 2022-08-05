import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';

const mapStateToProps = (state, props) => ({
  total: selectItemTotal(state, props)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { uuid } = ownProps;
  return {
    remove: () => dispatch(removeItem(uuid)),
    updatePrice: (price) => dispatch(updatePrice(uuid, price)),
    updateQuantity: (quantiy) => dispatch(updateQuantity(uuid, quantiy))
  };
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
