$(document).ready(function(){
  $('#item1').click(function(){
    $('#item1').hide();
    $('#design').show();
  });
  $('#design').click(function(){
    $('#design').hide();
    $('#item1').show();
  })
});
$(document).ready(function(){
  $('#item2').click(function(){
    $('#item2').hide();
    $('#development').show();
  });
  $('#development').click(function(){
    $('#development').hide();
    $('#item2').show();
  })
});
$(document).ready(function(){
  $('#item3').click(function(){
    $('#item3').hide();
    $('#project-mgnt').show();
  });
  $('#project-mgnt').click(function(){
    $('#project-mgnt').hide();
    $('#item3').show();
  })
});
$(document).ready(function(){
  $('#work1').mouseover(function(){
    $('#job1').show();
  }).mouseout(function(){
    $('#job1').hide()
  });
});
$(document).ready(function(){
  $('#work2').mouseover(function(){
    $('#job2').show();
  }).mouseout(function(){
    $('#job2').hide()
  });
});
$(document).ready(function(){
  $('#work3').mouseover(function(){
    $('#job3').show();
  }).mouseout(function(){
    $('#job3').hide()
  });
});
$(document).ready(function(){
  $('#work4').mouseover(function(){
    $('#job4').show();
  }).mouseout(function(){
    $('#job4').hide()
  });
});
$(document).ready(function(){
  $('#work5').mouseover(function(){
    $('#job5').show();
  }).mouseout(function(){
    $('#job5').hide()
  });
});
$(document).ready(function(){
  $('#work6').mouseover(function(){
    $('#job6').show();
  }).mouseout(function(){
    $('#job6').hide()
  });
});
$(document).ready(function(){
  $('#work7').mouseover(function(){
    $('#job7').show();
  }).mouseout(function(){
    $('#job7').hide()
  });
});
$(document).ready(function(){
  $('#work8').mouseover(function(){
    $('#job8').show();
  }).mouseout(function(){
    $('#job8').hide()
  });
});
// function submitForm(){
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;

//   if (name == "" && email == ""){
//   } 
//   else{
//     alert("Hey " + name + ". we have received your email. Thank you for reaching out to us.")
//   }
// }

$(document).ready(function(){
  $("form#contact-form").submit(function(event){
    event.preventDefault();
    
    var name = $("input#name").val();
    var email = $("input#email").val();
    $("input#name").val("");
    $("input#email").val("");
    $("input#message").val("");

    return alert("Hey " + name + ". We have received your email. Thank you for reaching out to us.")

  });

});