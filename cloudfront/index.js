const get = document.getElementById("getButton")
const post = document.getElementById("postButton")
const put = document.getElementById("putButton")
const del = document.getElementById("delButton")
const formdel=` <body>
<form style="border: 1px solid black; padding: 10px;">
    <label for="id">ID:</label>
    <input type="text" id="iddd" name="id" required style="margin: 5px;"><br>

</form>
<button id="save-button" type="submit" style="margin: 10px;">Save</button>`
const formid=` <body>
<form style="border: 1px solid black; padding: 10px;">
    <label for="id">ID:</label>
    <input type="text" id="iddd" name="id" required style="margin: 5px;"><br>

</form>`
const form =` <body>
<form style="border: 1px solid black; padding: 10px;">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required style="margin: 5px;"><br>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" required style="margin: 5px;"><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required style="margin: 5px;"><br>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender" required style="margin: 5px;">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select><br>
</form>

<button id="save-button" type="submit" style="margin: 10px;">Save</button>
</body>`
get.addEventListener('click' ,() => {
    let output = `` 
  $.ajax({
    url: 'http://localhost:3000/GET/persons',
    type: 'GET',
    success: function(result) {
      // Handle success
      result.forEach(element => {
        const temp = `
        <div class="object">
        <p>name: ${element.name}</p>
        <p>email: ${element.email}</p>
        <p>age: ${element.age}</p>
        <p>id: ${element.id}</p> </div>
        `
        output+=temp

      });
      document.getElementById("container").innerHTML=output
      console.log(result);
    },
    error: function(xhr, status, error) {
      // Handle error
      console.log(error);
    }
  });
});
  post.addEventListener('click' ,() => { 
    document.getElementById("container").innerHTML=form
   
    $(function() {
      $('#save-button').click(function(event) {
        const name = $('#name').val();
        const age = $('#age').val();
        const email = $('#email').val();
        const gender = $('#gender').val();
        const data = { name: name, age: age, email: email, gender: gender };
        console.log(data)
    $.ajax({
        url: 'http://localhost:3000/POST/persons',
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(data) {
            console.log("person added ")

        }
    });
  });
});
});
put.addEventListener('click' ,() => { 
  document.getElementById("container").innerHTML=formid+form
  $(function() {
    $('#save-button').click(function(event) {
      const id = $('#iddd').val();
      const name = $('#name').val();
      const age = $('#age').val();
      const email = $('#email').val();
      const gender = $('#gender').val();
      const data = { id: id, name: name, age: age, email: email, gender: gender };
  $.ajax({
      url: `http://localhost:3000/PUT/persons/${data.id}`,
      type: 'PUT',
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function(data) {
          console.log(data)

      }
  });
});
});
});
del.addEventListener('click' ,() => { 
  document.getElementById("container").innerHTML=formdel
  $(function() {
    $('#save-button').click(function(event) {
      const id = $('#iddd').val();
      const data = { id:id };
      console.log(data)
  $.ajax({
      url: `http://localhost:3000/DELETE/persons/${data.id}`,
      type: 'DELETE',
      data:(data),
      success: function(data) {
          console.log("person deleted ")

      }
  });
});
});
});


