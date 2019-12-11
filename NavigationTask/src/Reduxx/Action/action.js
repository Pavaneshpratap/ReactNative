import * as Actions from './actionTypes'
import {connect} from 'react-redux'
import SelectedComponent from '../Component/SelectedComponent'


const mapStateToProps = (state) => ({
    select: state.ContentReducer.select
})

const mapDispatchToProps = (dispatch) => ({
    selected:()=>dispatch({type:Actions.IS_SELECTED})
})

export default connect(mapStateToProps,mapDispatchToProps)(SelectedComponent)