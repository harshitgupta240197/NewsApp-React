import React, { Component } from 'react'
import InnerItem from './InnerItem';
import Spinner from './Spinner';


export class News extends Component {

  constructor(){
    super();
    console.log("This is a constructor from News Component")
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e7d1d2c5858c4c7faa390b0f4603c541&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }

  handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e7d1d2c5858c4c7faa390b0f4603c541&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  handleNextClick = async ()=>{
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

    }
    else{

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e7d1d2c5858c4c7faa390b0f4603c541&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      })
  }
  }


  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
        {this.state.articles.map((element) => {
                      return <div className='col-md-3' key = {element.url}>
                        <InnerItem title = {element.title?element.title.slice(0, 45):""} description = {element.description?element.description.slice(0,100):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                      </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
