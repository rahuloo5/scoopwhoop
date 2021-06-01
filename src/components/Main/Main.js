import React, { useReducer, useRef } from 'react';




import { useFetch, useInfiniteScroll, useLazyLoading } from './CustomHook'
import './Main.css';

function Main() {
 
  const imgReducer = (state, action) => {
    switch (action.type) {
      case 'STACK_IMAGES':
        return { ...state, images: state.images.concat(action.images) }
      case 'FETCHING_IMAGES':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }

  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, page: state.page + 1 }
      default:
        return state;
    }
  }

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 })
  const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

  let bottomBoundaryRef = useRef(null);
  useFetch(pager, imgDispatch);
 useLazyLoading('.card-img-top', imgData.images)
  useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

  return (
    <div style={{marginTop:50}}>
     
        <div className="tabs">
        <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">FRESH</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">HOT</a>
  </li>
          </ul>
          <hr></hr>
        </div>
        
      

      <div id='images' className="container">
        <div className="row">
            {console.log(imgData,"goluimagedata")}
          {
          imgData.images.map((image, index) => {
            console.log(imgData,"goluimagedata")
        
            const { category,title,feature_img,auth_display,article_id,readtime,pub_date } = image 
            return (
                <div className="col-sm-3 col-md-6 col-lg-4">
              {/* <div key={article_id} className="card">
                <div className="card-body ">
                  <img
                    alt={title}
                    data-src={feature_img}
                    className="card-img-top"
                    src={feature_img}
                  />
                  <div className="article_type">
                      <h4>{category}</h4>
                      </div>
                      <div className="article_head">
                          <h3>{title}</h3>
                          </div>

                </div>
               
              </div>

              
               */}

<div className="article-body" key={article_id} > 
<a href="#" className="article-image"> 
<figure className="wrapper-245"> 
<img
                    alt="scoopwhoopimage"
                    data-src={feature_img}
                    className="card-img-top"
                    src={feature_img}
                  /> </figure> </a> <div className="base-box"> 
<div className="base-left"> <a href="#" class="article-type"> {category} </a> </div>
 </div>
  <a href="#" className="article-title"><h4>{title}</h4></a> 
  <a href="/#" className="article-author">{auth_display.display_name}</a> 
  <div className="base-box"> <div className="base-left"> <div className="article-date-share"> 
  <span className="timeago" data-date="May 31, 2021 14:05:24"> Publish :{pub_date} </span> <h5>{readtime}</h5>
  </div> </div> </div> 
  </div>
                </div>
            )
          })}
        </div>
      </div>

      {imgData.fetching && (
        <div className="text-center bg-secondary m-auto p-3">
          <p className="m-0 text-white">Getting images</p>
        </div>
      )}
      <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
    </div>
  );
}

export default Main;