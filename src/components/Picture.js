import React from 'react'

const Picture = ({data}) => {
  return (
    <div className="picture">
        <p>{data.photographer}</p>
        <div className="imageContainer">
            <img src={data.src.large} alt="" />
        </div>
        {/* <p style={{textAlign: 'center', margin: '2px', border:"1rem solid white"}}><a target="_blank" href="{data.src.large}"></a></p> */}
        <div style={{textAlign: 'center', margin: '2px', border:"1rem solid white"}}>
        <span style={{fontSize: '15px'}} className="badge text-bg-primary rounded-pill">在此下載圖片: <a target="_blank" href="{data.src.large}"></a></span>
        <a target="_blank" href={data.src.large}><button className= "btn btn-success rounded-pill px-3" style={{fontSize: '15px', padding: '1px 5px'}}>按一下</button></a>
        </div>
        
    </div>
  )
}

export default Picture