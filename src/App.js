import logo from "./images/1.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
var i = 0;
var a = "X";
var b = "O";
var x = false;
var winner1 = " ";
var winner2 = " ";

function App() {
  const [data1, setdata1] = useState(" ");
  const [data2, setdata2] = useState(" ");
  const [data3, setdata3] = useState(" ");
  const [data4, setdata4] = useState(" ");
  const [data5, setdata5] = useState(" ");
  const [data6, setdata6] = useState(" ");
  const [data7, setdata7] = useState(" ");
  const [data8, setdata8] = useState(" ");
  const [data9, setdata9] = useState(" ");
  //Checked Win User start
  win();
  //Checked Win User End
  const dataset = () => {
    if(data1 ==" ")
    {
      if (i % 2 == 0) {
        setdata1("X");
      } else {
        setdata1("O");
      }
      i++;
    }
  };
  const dataset2 = () => {
   if (data2 == " ") 
   {
    if (i % 2 == 0) {
      setdata2("X");
    } else {
      setdata2("O");
    }  
   }
    i++;
  };
  const dataset3 = () => {
    if (data3==" ") 
    {
      if (i % 2 == 0) {
        setdata3("X");
      } else {
        setdata3("O");
      }
    }
    i++;
  };
  const dataset4 = () => {
   if (data4 == " ") {
    if (i % 2 == 0) {
      setdata4("X");
    } else {
      setdata4("O");
    }
   }
    i++;
  };
  const dataset5 = () => {
   if (data5==" ") 
   {
    if (i % 2 == 0) {
      setdata5("X");
    } else {
      setdata5("O");
    }  
   }
    i++;
  };
  const dataset6 = () => {
   if(data6==" "){
    if (i % 2 == 0) {
      setdata6("X");
    } else {
      setdata6("O");
    }
   }
    i++;
  };
  const dataset7 = () => {
    if (data7==" ") 
    {
      if (i % 2 == 0) {
        setdata7("X");
      } else {
        setdata7("O");
      }  
    }
    i++;
  };
  const dataset8 = () => {
    if (data8==" ") 
    {
      if (i % 2 == 0) {
        setdata8("X");
      } else {
        setdata8("O");
      }  
    }
    i++;
  };
  const dataset9 = () => {
    if (data9==" ") 
    {
      if (i % 2 == 0) {
        setdata9("X");
      } else {
        setdata9("O");
      }  
    }
    i++;
  };

  //Win Function......!
  function win() {
    //winner 1 Start
    if (data1 == "X" && data2 == "X" && data3 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data4 == "X" && data5 == "X" && data6 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data7 == "X" && data8 == "X" && data9 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data1 == "X" && data4 == "X" && data7 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data2 == "X" && data5 == "X" && data8 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data3 == "X" && data6 == "X" && data9 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data1 == "X" && data5 == "X" && data9 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    if (data3 == "X" && data5 == "X" && data7 == "X") {
      x = true;
      winner1 = "Player 1 Winner....";
    }
    //winner 1 End

    //Winner 2 start
    if (data1 == "O" && data2 == "O" && data3 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data4 == "O" && data5 == "O" && data6 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data7 == "O" && data8 == "O" && data9 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data1 == "O" && data4 == "O" && data7 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data2 == "O" && data5 == "O" && data8 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data3 == "O" && data6 == "O" && data9 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data1 == "O" && data5 == "O" && data9 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    if (data3 == "O" && data5 == "O" && data7 == "O") {
      x = true;
      winner1 = "Player 2 Winner....";
    }
    //Winner 2 end
  }
  const reset = () => {
    setdata1(" ");
    setdata2(" ");
    setdata3(" ");
    setdata4(" ");
    setdata5(" ");
    setdata6(" ");
    setdata7(" ");
    setdata8(" ");
    setdata9(" ");
    x = false;
    i = 0;
    winner1 = " ";
    winner2 = " ";
  };
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h2 className="pt-3">Tic Tac Toe </h2>
            <div className="first_div text-center mx-auto pt-5">
              <table className="mx-auto shadow-lg p-3 mb-5 bg-body">
                <tr>
                  <td>
                    <input
                    className="fs-1"
                      type="button"
                      onClick={() => dataset()}
                      value={data1}
                      disabled={x}
                    />
                  </td>
                  <td>
                    <input
                    className="fs-1"
                      value={data2}
                      type="button"
                      onClick={() => dataset2()}
                      disabled={x}
                    />
                  </td>
                  <td>
                    <input
                    className="fs-1"
                      value={data3}
                      type="button"
                      onClick={() => dataset3()}
                      disabled={x}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                    className="fs-1"
                      value={data4}
                      type="button"
                      onClick={() => dataset4()}
                      disabled={x}
                    />
                  </td>
                  <td>
                    <input
                    className="fs-1"
                      value={data5}
                      type="button"
                      onClick={() => {
                        dataset5();
                      }}
                      disabled={x}
                    />
                  </td>
                  <td>
                    <input
                    className="fs-1"
                      value={data6}
                      type="button"
                      onClick={() => {
                        dataset6();
                      }}
                      disabled={x}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                    className="fs-1"
                      value={data7}
                      type="button"
                      onClick={() => {
                        dataset7();
                      }}
                      disabled={x}
                    />
                  </td>
                  <td>
                    <input
                    className="fs-1"
                      value={data8}
                      type="button"
                      onClick={() => {
                        dataset8();
                      }}
                      disabled={x}
                    />
                  </td>
                  <td>
                    <input
                    className="fs-1"
                      value={data9}
                      type="button"
                      onClick={() => {
                        dataset9();
                      }}
                      disabled={x}
                    />
                  </td>
                </tr>
              </table>

              <div className="pb-4">
                <table className="mx-auto p-3 mb-2 " style={{ border: "none" }}>
                  <tr>
                    <td>
                      <button
                        className="px-5 fs-5 bg-danger"
                        onClick={() => reset()}
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                </table>
                <h2 className="text-info">
                  {winner1}
                  {winner2}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
