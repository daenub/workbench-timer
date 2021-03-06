import React, {useRef, useState} from "react"
import {connect} from "react-redux"

import {createIdentifier} from "./utils.js"

export const CreateActivity = connect()(({dispatch}) => {
  const [description, setDescription] = useState("")
  const descriptionField = useRef()
  return (
    <form
      className="form-inline create-activity"
      onSubmit={e => {
        e.preventDefault()
        if (description.length) {
          dispatch({
            type: "ADD_ACTIVITY",
            activity: {description, seconds: 0, id: createIdentifier()},
          })
          setDescription("")
        } else {
          descriptionField.current.focus()
        }
      }}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Was willst Du erreichen?"
          ref={descriptionField}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Start!
          </button>
        </div>
      </div>
    </form>
  )
})
