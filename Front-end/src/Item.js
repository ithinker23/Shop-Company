import React,{useRef} from 'react'


export default function Item({ item }) {

  const itemPreviewRef = useRef();

  return (
    <>
      <div className='itemDiv' onClick={()=>{ itemPreviewRef.current.style.display = "block";}}>
        <div className='itemImagePreviewContainer'>
        <img className="itemImagePreview" src={item.Photo} alt='of product'></img>
        </div>
        <div className='itemDivDesc'>
          <div className='itemDivTitle'>{item.Name}<div className='itemDivPrice'>${item.Price}</div></div>
          <div className='itemDivClass'>{item.Class}</div>
          <div className='itemDivColours'>{item.Colours}</div>
        </div>
      </div>

      <div  ref={itemPreviewRef} className='itemPopupPreviewContainer'>
        <div className='itemPopupPreview'>
        <div className='itemPopupClose' onClick={()=>{itemPreviewRef.current.style.display = "none";}}>x</div>
          <div className='itemPopupImageContainer'><img className="itemPopupImage" src={item.Photo} alt="itemPhoto"></img></div>
          <div className='itemPopupName'>{item.Name}
          <div className='itemPopupPrice'>${item.Price}</div>
          <div className='itemPopupClass'>{item.Class}</div>
          </div>

          <div className='itemPopupDesc'>
            {item.Description}
          </div>
        </div>
      </div>
    </>

  )
}
