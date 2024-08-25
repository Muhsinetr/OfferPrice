let wrapper = document.querySelector(".wrapper");

let offerArray = [
    {
        company: "impex",
        itemGroup: "gas stove",
        groupName: "2 burener steel",
        itemName: "glaze",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "gas stove",
        groupName: "2 burener steel",
        itemName: "splenid 2b",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "gas stove",
        groupName: "3 burener steel",
        itemName: "splenid 3b",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "gas stove",
        groupName: "3 burener steel",
        itemName: "glaze 3b",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "gas stove",
        groupName: "2 burner glass",
        itemName: "glaze 3b",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "gas stove",
        groupName: "3 burner glass",
        itemName: "glaze 3b",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "norma3",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "ep5",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "ep2",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "norma3",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "norma5",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "norma7",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "norma10",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "IB",
        itemName: "eco2",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "IB",
        itemName: "eco3",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "IB",
        itemName: "eco5",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "cooker",
        groupName: "IB",
        itemName: "eco7",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "tawa",
        itemName: "tawa sml",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "tawa",
        itemName: "tawa sml IB",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "tawa",
        itemName: "tawa med Ib",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "frypan",
        itemName: "frypan med",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "frypan",
        itemName: "frypan med",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "other",
        itemName: "palappam appachatty",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "impex",
        itemGroup: "nonstick",
        groupName: "other",
        itemName: "kuzhiyappam",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "nonstick",
        groupName: "Pathiri tawa",
        itemName: "squre pathiri tawa",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "nonstick",
        groupName: "Pathiri tawa",
        itemName: "round pathiri tawa",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "cooker ss 3",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "cooker ss 5",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "cooker 303",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "cooker 505",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "cooker",
        groupName: "IB",
        itemName: "cooker 501",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "onix",
        itemGroup: "cooker",
        groupName: "IB",
        itemName: "cooker 503",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "sujatha",
        itemGroup: "mixi",
        groupName: "900w",
        itemName: "supermix",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "sujatha",
        itemGroup: "mixi",
        groupName: "900w",
        itemName: "dynamix",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "sujatha",
        itemGroup: "mixi",
        groupName: "1000w",
        itemName: "mo1",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "sujatha",
        itemGroup: "mixi",
        groupName: "1000w",
        itemName: "mo3",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "sujatha",
        itemGroup: "iron box",
        groupName: "iron box",
        itemName: "dry fast",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "sujatha",
        itemGroup: "iron box",
        groupName: "iron box",
        itemName: "smooth iron",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "greenchef",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "cooker 3ltr",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "greenchef",
        itemGroup: "cooker",
        groupName: "steel",
        itemName: "cooker 5ltr",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "greenchef",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "cooker 5ltr",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "greenchef",
        itemGroup: "cooker",
        groupName: "aluminium",
        itemName: "cooker 3ltr",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "greenchef",
        itemGroup: "gas stove",
        groupName: "glasstop",
        itemName: "namo 3 burner",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "greenchef",
        itemGroup: "gas stove",
        groupName: "glasstop",
        itemName: "namo 2 burner",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "preethi",
        itemGroup: "mixi",
        groupName: "mixi",
        itemName: "zodiac",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "preethi",
        itemGroup: "mixi",
        groupName: "mixi",
        itemName: "100w mixi",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "preethi",
        itemGroup: "othres",
        groupName: "coconut scraper",
        itemName: "coconut scraper",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "fan",
        groupName: "wall fan",
        itemName: "fenista",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "fan",
        groupName: "pedastal",
        itemName: "abcd",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "fan",
        groupName: "pedastal",
        itemName: "arjf",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "fan",
        groupName: "wallfan",
        itemName: "dream",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "fan",
        groupName: "wallfan",
        itemName: "bldc fan",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "mixi",
        groupName: "750w",
        itemName: "velocity",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "mixi",
        groupName: "750w",
        itemName: "wizmix",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "mixi",
        groupName: "500w",
        itemName: "wizmix",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "vguard",
        itemGroup: "mixi",
        groupName: "500w",
        itemName: "velocity",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "havells",
        itemGroup: "mixi",
        groupName: "750w",
        itemName: "hydro",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "havells",
        itemGroup: "mixi",
        groupName: "750w",
        itemName: "power",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "havells",
        itemGroup: "mixi",
        groupName: "500w",
        itemName: "eso",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "havells",
        itemGroup: "fan",
        groupName: "wall fan",
        itemName: "eso",
        oldPrice: 2499,
        offerPrice: 1999
      },{
        company: "havells",
        itemGroup: "fan",
        groupName: "pedastal",
        itemName: "abcd",
        oldPrice: 2499,
        offerPrice: 1999
      },
];
wrapper.addEventListener("click", function (e) {
const offAll = document.querySelectorAll('.off-item');
const offAllg = document.querySelectorAll('.off-group');
  if (e.target.classList[0] === "on-item") {
    offAll.forEach(function(offAll) {
        offAll.parentElement.nextElementSibling.style.cssText = "display : none;";
        offAll.style.cssText = "background-image: url(down-button.png);";
        offAll.classList.add("on-item");
        offAll.classList.remove("off-item");
    });
    offAllg.forEach(function(offAllg) {
        offAllg.parentElement.nextElementSibling.style.cssText = "display : none;";
        offAllg.style.cssText = "background-image: url(down-button.png);";
        offAllg.classList.add("on-group");
        offAllg.classList.remove("off-group");
    });
    e.target.parentElement.nextElementSibling.style.cssText =
      "display : block;";
    e.target.style.cssText = "background-image: url(up-button.png);";
    e.target.classList.add("off-item");
    e.target.classList.remove("on-item");
  } else if (e.target.classList[0] === "off-item") {
    e.target.parentElement.nextElementSibling.style.cssText = "display : none;";
    e.target.style.cssText = "background-image: url(down-button.png);";
    e.target.classList.add("on-item");
    e.target.classList.remove("off-item");
  } else if (e.target.classList[0] === "on-group") {
    offAllg.forEach(function(offAllg) {
        offAllg.parentElement.nextElementSibling.style.cssText = "display : none;";
        offAllg.style.cssText = "background-image: url(down-button.png);";
        offAllg.classList.add("on-group");
        offAllg.classList.remove("off-group");
    });
    e.target.parentElement.nextElementSibling.style.cssText =
      "display : block;";
    e.target.style.cssText = "background-image: url(up-button.png);";
    e.target.classList.add("off-group");
    e.target.classList.remove("on-group");
  } else if (e.target.classList[0] === "off-group") {
    e.target.parentElement.nextElementSibling.style.cssText = "display : none;";
    e.target.style.cssText = "background-image: url(down-button.png);";
    e.target.classList.add("on-group");
    e.target.classList.remove("off-group");
  }
});

function sortoutArray() {
  let pushcode =``;
  let sorted = companySort();
  sorted.forEach((comp) => {
    let grpary = [];
    let newAry = [];

    pushcode += `<div class="items">
            <div class="header">
                <p>${comp.charAt(0).toUpperCase() + comp.slice(1)}</p>
                <div class="on-item"></div>
            </div>
            <div class="groups">`;

    offerArray.forEach((val) => {
      if (val.company == comp) {
        grpary.push(val.itemGroup);
        newAry.push(val);
      }
    });
    grpary = [...new Set(grpary)];
    grpary.forEach((grp) => {
      let itnm = [];
      let new2ary = [];
      pushcode += ` 
            <div class="item-names">
                <div class="itmnm-head">
                    <p>${grp.charAt(0).toUpperCase() + grp.slice(1)}</p>
                    <div class="on-group"></div>
                </div>
                <div class="item-divs">`;
      newAry.forEach((val) => {
        if (val.itemGroup == grp) {
          itnm.push(val.groupName);
          new2ary.push(val);
        }
      });
      itnm = [...new Set(itnm)];
      itnm.forEach((itm) => {
        pushcode += `<fieldset>
                        <legend>${itm.charAt(0).toUpperCase() + itm.slice(1)}</legend>`;
        new2ary.forEach((val) => {
          if (val.groupName == itm) {
            pushcode += ` <div>
                            <p>${val.itemName.charAt(0).toUpperCase() + val.itemName.slice(1) }</p>
                            <p>Old price : ${val.oldPrice} /-</p>
                            <p>Offer price : ${val.offerPrice} /-</p>
                            <p>Diffrence : ${
                              val.oldPrice - val.offerPrice
                            } /-</p>
                        </div>`;
          }
        });
        pushcode += `</fieldset>`;
      });
      pushcode +=`</div>
            
        </div>`;
    });
    
    pushcode += `</div>
                </div> `
  });
  wrapper.innerHTML = pushcode;
}

function companySort() {
  let sortedItemArray = [];
  offerArray.forEach((val) => {
    sortedItemArray.push(val.company);
  });
  let sortedDArray = [...new Set(sortedItemArray)];
  return sortedDArray;
}

// let nl = null;
// function animate(elem) {
//   let pos = 0;
//   clearInterval(nl);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 100) {
//       clearInterval(nl);
//     } else {
//       pos++; 
//       elem.style.opacity = pos + '%'; 
//     }
//   }
// }
sortoutArray();
