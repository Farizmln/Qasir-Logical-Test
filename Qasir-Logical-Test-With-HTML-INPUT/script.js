$(document).ready(function(){
  $('.match').on('click', function() {
    // defined 2 object constanta from input 
    const obja = {}
    const objb = {}
    
    // looping each div class "slot_subclass" which have subclass named as "slot" will loop the input as key and value then collect for obja
    $(".slot_subclass").each(function() {
      const $slots = $(this).find('.slot');
  
      obja[$slots.eq(0).val()] = Number($slots.eq(1).val())
    })

    // looping each div class "slot1_subclass" which have subclass named as "slot1" will loop the input as key and value then collect for objb
    $(".slot1_subclass").each(function() {
      const $slots = $(this).find('.slot1');
  
      objb[$slots.eq(0).val()] = Number($slots.eq(1).val())
    })
    
    function resultCombined(){
    // Looping key in const obj1, obj2, obj3
      for (let key in obja && objb && object3) {
      // if match key of two object between obj1 and obj2
        if (obja.hasOwnProperty(key) === objb.hasOwnProperty(key)) {
        // result is equal in addition of obj1 and obj2
          result[key] = obja[key] + objb[key];
        } else{
        // if not match, result key is equal as object not match between obja and objb 
          result[key] = object3[key] ;
        }
      }
    return result;
    }

    const object3 = {...obja, ...objb}; 
    const result = {};
    document.getElementById("outputobja").innerHTML = JSON.stringify(obja);
    document.getElementById("outputobjb").innerHTML = JSON.stringify(objb);
    document.getElementById("outputobjfinal").innerHTML = JSON.stringify(resultCombined(result));
  })
})

var count = 0;
function add_input_obja(){
  count+=1
  html='<div class="slot_subclass" id="row'+count+'"><div class="form-group"><label for="keystate">Key:</label><input type="text" class="form-control slot" name="slot_name" id="key'+count+'"></div><div class="form-group"><label for="valuestate">Value:</label><input type="number" class="form-control slot" name="slot_type" id="value'+count+'"></div></div>'
  var form = document.getElementById('objecta')
  form.innerHTML+=html
}

function add_input_objb(){
  count+=1
  html='<div class="slot1_subclass" id="row'+count+'"><div class="form-group"><label for="keystate">Key:</label><input type="text" class="form-control slot1" name="slot_name" id="key'+count+'"></div><div class="form-group"><label for="valuestate">Value:</label><input type="number" class="form-control slot1" name="slot_type" id="value'+count+'"></div></div>'
  var form = document.getElementById('objectb')
  form.innerHTML+=html
}

function remove_field_obja(){
  var master_class = document.getElementById("objecta");
  var input_class = master_class.getElementsByClassName("slot_subclass");

  if(input_class.length > 1){
    master_class.removeChild(input_class[(input_class.length)-1])
  }
}

function remove_field_objb(){
  var master_class = document.getElementById("objectb");
  var input_class = master_class.getElementsByClassName("slot1_subclass");

  if(input_class.length > 1){
    master_class.removeChild(input_class[(input_class.length)-1])
  }
}

// This is the key core of pairs two object contain key and value between two objects
/*
function resultCombinedExample(){
  // Looping key in const obj1, obj2, obj3
  for (let key in obj1 && obj2 && objects) {
    // if match key of two object between obj1 and obj2
    if (obj1.hasOwnProperty(key) === obj2.hasOwnProperty(key)) {
      // result is equal in addition obj1 and obj2
      resulta[key] = obj1[key] + obj2[key];
    } else{
      // else not match, result key is object not match between two object 
      resulta[key] = objects[key] ;
    }
  }
  return resulta;
}
const obj1 = {a: 10,b: 20,c: 30};
const obj2 = {a: 3 ,c: 6 ,d: 3};
const objects = {...obj1, ...obj2}; 
const resulta = {};
*/