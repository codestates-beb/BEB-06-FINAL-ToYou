import React, { useState } from "react";
import "./InvestList.css";
import { useRecoilValue } from "recoil";
import { NavItem } from "reactstrap";

const InvestList = () => {

    const [selected, setSelected] = useState(null)
    const toggle = () =>{
        if(selected == true){
            return setSelected(null)
        } return setSelected(true)
    }


  return (
  <div class="wrapper">
    <div className="accordion">
        
       
            <div className="item" >
                <div className="title" onClick={()=>{toggle()}}>
                <h4>{data.quest}</h4>예치토큰&nbsp;정보조회
                <span className="plus">{selected== true ? '-':'+'}</span>
                <a href="javascript:;" class="code_view actionBtn11">
	             <span class="hover">
	             <span class="line1"></span>
	             <span class="line2"></span>
	                </span>
                        </a>
                </div>
                <div className={selected== true ? 'content show':'content hide'}>{data.answ}
                
                <hr/>
                <input/>
                </div>
        </div>
        <ul class="list-group">
    <li>Item One
        <span class="badge">2</span>
    </li>
    <li>Item Two
        <span class="badge">10</span>
    </li>
    <li>Item Three
        <span class="badge">9</span>
    </li>
    <li>Item Four
        <span class="badge">0</span>
    </li>
</ul>

       
     
    </div>
  </div>

  
  );
};

const data = {
    quest :"CAKE-BNB",
    answ:"234dfasdfasfasdfsdfsdfsdfsdfasfsdfsfasdfsdf2werwr42"
}
export default InvestList;