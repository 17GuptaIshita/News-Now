import defaultimg from "../assets/defaultimg.png";

export const NewsItem = ({title,description,src,url}) => {
  return (
    <div>
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{width:"220px", height:"300px", border: "1px solid #fff"}}>
  <img src={src? src:defaultimg} style={{height:"40%", width:"100%"}} className="card-img-top" alt="..."/ >
  <div className="card-body d-flex flex-column justify-content-between p-0 pt-2" style={{width:"100%", height:"calc(60% - 8px)"}}>
    <div>
      <h6 className="card-title small card-title-2lines" style={{fontSize: "0.85rem"}}>{title}</h6>
      <p className="card-text small card-text-5lines" style={{fontSize: "0.75rem"}}>{description ? description : ""}</p>
    </div>
    <div className="mt-auto text-start">
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default NewsItem;