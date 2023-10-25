import dataGlasses from '../Data/dataGlasses.json'
import {useState} from 'react'
export const BaiTapThuKinh = () => {

 const renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return <img onClick={()=>{handleNumber(glassesItem)}} className='ml-2 p-2 border-width-1'  style={{width: '120px', cursor: 'pointer'}} key={index} src={glassesItem.url}/>
    })
  }

//  const state = {
//   glassesCurrent: {
//     "id": 1,
//         "price": 30,
//         "name": "GUCCI G8850U",
//         "url": "./glassesImage/v1.png",
//         "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//   }
//  }

 const [number, setNumber] = useState(() => {
  return {
    "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
})

const handleNumber = (abc) => {
  setNumber(abc)
}

 const changeGlasses = (newGlasses)=> {
   this.setState({
    glassesCurrent: newGlasses
   })
 }

  const styleGlasses = {
    width: '150px',
    top: '75px',
    right: '68px',
    opacity: '0.7',
  }

  const infoGlasses = {
    width: '250px',
    left: '270px',
    top: '214px',
    backgroundColor: 'rgba(255,127,0,.5)',
    textAlign: 'left',
    paddingLeft: '15px',
    height: '90px',
  }

  return (
    <div
      style={{
        backgroundImage: "url(./glassesImage/background.jpg)",
        backgroundSize: "2000px",
        minHeight: "2000px",
      }}
    >
      <div style={{ backgroundColor: "rgba(0,0,0,.3)", minHeight: "2000px" }}>
        <h3
          style={{ background: "rgba(0, 0, 0,.3" }}
          className="text-center text-light p-5"
        >
          TRY GLASSES APP ONLINE
        </h3>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-6">
              <div className="position-relative">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                  className="position-absolute"
                />
                <img style={styleGlasses} src={number.url}  alt="" className="position-absolute" />
                <div style ={infoGlasses} className="position-absolute">
                  <span style={{color: '#AB82FF', fontSize: '17px'}} className='font-weight-bold text-center'>{number.name}</span><br />
                  <span style={{fontSize: '13px', fontWeight: '400'}}>{number.desc}</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                style={{ width: "250px" }}
                src="./glassesImage/model.jpg"
                alt="model.jpg"
              />
            </div>
          </div>
        </div>
        <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
          {renderGlassesList()}
        </div>
      </div>
    </div>
  );
};
