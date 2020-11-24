// @flow
import React from 'react';

export const Tags = ({tags, selectTag, selectExposureGb}) => {
  let tagList = tags.map((tag, index) => <li key={index} className="" style={{display:"inline-block"}}>
                                            <a style={{display:"inline-block"
                                                      , border: "1px solid #e6e6e6"
                                                      , textDecoration: "none"
                                                      , borderRadius:"1.25rem"
                                                      , color:"#222"
                                                      , padding:"0 0.75rem"
                                                      , fontSize:"0.75rem"
                                                      , lineHeight:"1.5625rem"
                                                      , height:"25px"
                                                      }}
                                               href="javascript:void(0);" onClick={function(){
                                              selectTag(tag.fieldValue)
                                              selectExposureGb('TAG')
                                            }}>
                                              {tag.fieldValue}({tag.totalCount})
                                            </a>
                                          </li>)
  return (<ul className="" style={{display:"block"
                    , listStyle:"none"
                    , margin: "0 -0.625rem"
                    , padding:"0"
                    }}>{tagList}</ul>)
}


