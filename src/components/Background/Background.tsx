import React from 'react'
import * as styled from './styles'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AllActions } from '~/store/actions/actionTypes';
import * as actions from '~/store/actions/index';
import { Dispatch } from 'redux';

interface DispatchProps {
    quit: () => void,
}

type Props = DispatchProps

const Background: React.FC<Props> = ({quit}) => (
    <styled.Background>
        <Link to="/" onClick={quit}>
            <styled.Icon icon={faHome}/>
        </Link>
    </styled.Background>
)

const mapDispatchToProps = (dispatch: Dispatch<AllActions>): DispatchProps => {
    return {
        quit: () => dispatch(actions.quizQuit()),
    }
}

export default connect(null, mapDispatchToProps)(Background);