import React, { Component } from 'react'

export class InnerItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/06/12/1600x900/stock_1718196461403_1718196461768.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a rel='noreferrer' href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default InnerItem
