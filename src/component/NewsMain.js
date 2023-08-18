import React, { Component } from 'react'

export default class NewsMain extends Component {
  render() {
    let {title , discription , imgurl , NewsUrl ,  date} = this.props
    return (
      <>
      <div className="my-2">
        <div className="card">
          <img src={!imgurl?"https://placehold.it/600x400/444444/FFFFFF":imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{discription}....</p>
              <p className="card-text"><small className="text-body-secondary">Updated at <b>{new Date(date).toGMTString()}</b></small></p>
              <a rel='noreferrer' href={NewsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
      </>
    )
  }
}
