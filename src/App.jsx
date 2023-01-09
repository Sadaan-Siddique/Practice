import React from 'react';
import { useState } from 'react';
import { UseEffect } from './components/Practice';

function App() {
  // React Hooks
  const [num, setNum] = useState(1);                                      
  const [data, setData] = useState('hello this is react hooks');
  const [arr , setArr] = useState([1,2,3,4,5,'This is array']);
  const [inputValue , setInputValue] = useState('');
  // JS
  let helo = "hello";
  function chngNum() {
    setNum(num + 1);
    if (num == 1){
      setData("now data is changed")
    }
    else{
      setData("again changed")
      setArr(arr.map((item)=>{
        return item+'  '+'hello'+'<br>'
      }));
    }
    
    console.log(num);
  }
  function copy(e){
    console.log(2+1+' '+'HELLO');
    console.log(e.target.value);
    setInputValue(e.target.value+' '+'hello');
  }

  // let whole = <div className='container border-5 border-dark'>
  //   <div className="row border-5 border-dark">
  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 1</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>

  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 2</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>

  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 3</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>

  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 4</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>

  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 5</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>

  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 6</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>

  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 7</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>
  //     <div className="card col-lg-3 col-md-6 col-sm-6 col-xm-12" style={{ width: "18rem" }}>
  //       <img className="card-img-top" src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="Card image cap" />
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <p className="card-text">Product 7</p>
  //         <a href="https://sadaan-1portfolio.netlify.app/" className="btn btn-primary">Go somewhere</a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // let arr = [whole];
  // let newarr = arr.map((item) => {
  //   return <Bokk key={item} data={item} />
  // })
  // console.log(newarr);



  // Html
  return (
    <>
      <button className='btn btn-primary btn-outline-dark fw-bold border-1 mt-5 ms-5' onClick={chngNum}>Click</button>
      <p className='fw-bold ms-5'>This is use states variable:{num}</p>
      <label>Name:</label><input type="text" name="" id="" onChange={copy}/>
      <p>{inputValue}</p>
      <UseEffect/>

    </>
  );
}
export default App; 