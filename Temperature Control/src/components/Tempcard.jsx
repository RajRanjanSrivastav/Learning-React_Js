import React, { useEffect, useState } from "react";

const Tempcard = () => {
  const [cnt, setCnt] = useState(0);
  const [clr, setCrl] =useState("red");

  useEffect(()=>{
   const arr= ['blue','green','purple','yellow'];
   let i = Math.floor(Math.random() * 4);
   console.log(i);
   setCrl(arr[i]);
  },[cnt])
  return (
    <>
      <div
        className="container-fluid bg-dark"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <div class="card p-2" style={{ width: "22rem"}}>
          <div class="card-body">
            <div className="row">
              <div className="col">
                <div className="cir1  mx-auto" style={{backgroundColor:clr}}>{cnt}</div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col btn-cont">
                <button className="cir2" onClick={()=>setCnt(cnt-1)}>-ve</button>
                <button className="cir2" onClick={()=>setCnt(cnt+1)}>+ve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tempcard;
