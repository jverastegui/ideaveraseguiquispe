import React from "react";
import Item from "./Item";






const ItemList = (props) => {

    // let totProd =  props.lst.length;
    // let res = totProd % 4;
    // let totRows = Math.trunc(totProd / 4);
    // if (res > 0)
    // {
    //     totRows = totRows + 1;
    // }
    // let ini = 0;
    // let max = 0;
    // let firstLoop = 0;
    // let divCont;
    // for (let i = 0; i <= totRows; i++)
    // {
    //     if (firstLoop == 0)
    //     {
    //         ini = 0;
    //         max = 3;
    //         firstLoop = 1;
    //     }
    //     else
    //     {
    //         max = max + 4;
    //         ini = ini + 4;
    //     }
    //     divCont=divCont + <div></div>

    // }
    return (
        <div className="d-flex flex-row flex-nowrap">
            {
                props.lst.map(item => {
                    return <Item key={item.id} Item={item}></Item>
                })
            }
        </div>
    )
};

export default ItemList;