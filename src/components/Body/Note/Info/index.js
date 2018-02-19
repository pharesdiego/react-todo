import React from 'react'
const Info = props => <div className="bg-gray w-100 d-flex my-2 p-2">
                        <div className="code-block text-gradient word-wrap color-primary-blue">
                          {
                            props.info
                          }
                        </div>
                      </div>

export default Info