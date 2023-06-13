
// function openModel(type, e) {
//   document.getElementById("modal-wrapper").innerHTML += getModal(type);
//   $("#clothName").focus();
// }

// function closeModal() {
//   document.getElementById("modal-wrapper").innerHTML = "";
// }

// function addItem(type, event) {
//   event.preventDefault();

//   const clothName = document.getElementById("clothName");
//   const clothColor = document.getElementById("clothColor");
//   const clothType = document.getElementById("clothType");

//   const targetCategory = document.getElementById(clothType.value);
//   const table = targetCategory.getElementsByClassName(type)[0];

//   clothName.nextSibling.remove();

//   if (!clothName.value == "" || !clothColor.value == "") {
//     table.innerHTML += `<span class="task-box dropright">
//     <span class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ${clothName.value} _ ${clothColor.value}</span>
//     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="min-width: 0px;">
//       <span class="button text-danger delete fa fa-trash-o mr-2 ml-2" onclick="deleteFunc(this)" id="deleteItem"></span>
//       <span class="button text-dark edit fa fa-pencil-square-o mr-2" onclick="editFunc(this, '${clothName.value}','${clothColor.value}','${clothType.value}','${type}')"></span>
//     </div>
//     <br /></span>`;

//   }

//   document.getElementById("modal-wrapper").innerHTML = "";
// }

// // Define the function
// // to screenshot the div
// function takeshot() {
//   let div = document.getElementById("example").cloneNode(true);
//   // Use the html2canvas
//   // function to take a screenshot
//   // and append it
//   // to the output div
//   $("#output").children().remove();
//   setTimeout(() => {
//     if ($("#output").parent().parent().parent().hasClass("show")) {
//         document.getElementById("output").append(div);
//       }
//       let x = $("#output #example button, #output #example .button");
//     x.each((i) => {
//       x[i].classList.add("hide");
//     });
      
//   }, 200);
// }



// function getModal(type) {
//   return `<div id="custom-model-main" class="custom-model-main model-open">
// <div class="container">
//   <div class="row">
//     <div class="col-12 col-md-8">
//       <div class="custom-model-inner">
//         <div class="custom-model-wrap">
//           <div class="pop-up-content-wrap">
//             <div class="items">
//               <div class="adding row">
//                 <div class="add col-6">Add Item</div>
//                 <div class="close col-6" onclick="closeModal()">×</div>
//               </div>
//               <form onsubmit="addItem( '  ${type}  ', event)">
//                 <div class="input-ele row">
//                   <div class="mb-3 col-lg-6">
//                     <label
//                       for="staticEmail"
//                       class=" col-form-label"
//                       >Clothe Name</label
//                     >
//                     <input
//                       id="clothName"
//                       type="text"
//                       class="form-control"
//                       min="1"
//                     />
//                   </div>
//                   <div class="mb-3 col-lg-6">
//                     <label
//                       for="inputPassword"
//                       class=" col-form-label"
//                       >Clothe Color</label
//                     >
//                     <input
//                       id="clothColor"
//                       type="text"
//                       class="form-control"
//                       min="1"
//                     />
//                   </div>
//                   <div class="mb-4  col-lg-12">
//                     <label
//                       class=" col-form-label"
//                       >Cloth type</label
//                     >
//                       <select
//                         id="clothType"
//                         class="form-control"
//                       >
//                       <option value="workware">Workware</option>
//                       <option value="home">Home</option>
//                       <option value="sport">Sport</option>
//                       <option value="partyware">Partyware</option>
//                       </select>

//                   </div>
//                 </div>
//                 <button
//                   id="saveData"
//                   class="btn btn-primary text-center submit"
//                 >
//                   Save
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="bg-overlay"  onclick="closeModal()"></div>
// </div>`;
// }

// // delete function

// function deleteFunc(elem) {
//   let t = elem.parentNode.parentNode;
//   t.parentNode.removeChild(t);
// }

// //  edit function

// function editFunc(elem, x, y, z, type) {
//   openModel(type);

//   clothName.value = x;
//   clothColor.value = y;
//   clothType.value = z;

//   let t = elem.parentNode.parentNode;
//   t.parentNode.removeChild(t);
// }


import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const AppXX = () => {
  const checklists = [
    "Dance",
    "Music",
    "Movie",
    "Travelling",
    "Writing",
    "Cooking",
    "Drawing",
    "Singing",
  ];

  const [checkedModelList, setCheckedModelList] = useState([]);

  const onChangeModel = (e) => {
    const ischecked = e.target.checked;
    const dataid = e.target.dataset.id;
    if (dataid === "checkall") {
      if (ischecked === true) {
        setCheckedModelList(checklists);
      } else {
        setCheckedModelList([]);
      }
    } else {
      if (ischecked === true) {
        setCheckedModelList((prevalue) => [...prevalue, dataid]);
      } else {
        const resultfilter = checkedModelList.filter((d, index) => {
          return d !== dataid;
        });
        setCheckedModelList(resultfilter);
      }
    }
  };

  // Checkbox Checkedinput lists array
  console.log(checkedModelList);

  const formSubmitEvent = (e) => {
    e.preventDefault();

    // Result On Submit Click
    // console.log(checkedModelList);
  };

  return (
    <React.Fragment>
      <div className="row m-0 justify-content-center">
        <div className="col-md-4 mt-5 mb-5">
          <div className="form-area">
            <div className="form-inner">
              <form onSubmit={formSubmitEvent}>
                <h4 className="form-heading mb-4 text-primary text-center">
                  React Check / Uncheck All Checkbox
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div class="alert alert-warning" role="alert">
                      You can see result in console
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-0">
                      <label className="d-block">Hobbies</label>
                      <div className="custom-control custom-checkbox d-inline-block mr-2">
                        <input
                          type="checkbox"
                          className="custom-control-input checkbox-input"
                          data-id="checkall"
                          id="checkall"
                          value="checkall"
                          onChange={onChangeModel}
                          checked={
                            checkedModelList.length === checklists.length
                          }
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkall"
                        >
                          Check All Hobbies
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  {checklists.map((dvalue, index) => {
                    return (
                      <div className="col-lg-4">
                        <div className="form-group">
                          <div className="custom-control custom-checkbox d-inline-block mr-2">
                            <input
                              type="checkbox"
                              className="custom-control-input checkbox-input"
                              data-id={dvalue}
                              id={dvalue}
                              value={dvalue}
                              onChange={onChangeModel}
                              checked={checkedModelList.includes(dvalue)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={dvalue}
                            >
                              {dvalue}
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="col-lg-12 text-right">
                  <button type="submit" className="btn btn-primary form-submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default AppXX
// ReactDOM.render(<App />, document.getElementById("root"));