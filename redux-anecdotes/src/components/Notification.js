import React from 'react'
//import { useSelector } from 'react-redux'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {
  //const notification = useSelector(state => state.notification)
  const notification = props.notification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if(notification!=='')
    return (
      <div style={style}>
        {notification}
      </div>
    )
  else
    return ''
}

const mapDispatchToProps = {
  notify,
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification)

