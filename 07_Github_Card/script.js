//So here we are learning how to make api request and how to access the json data from that api

let avatar;
const requestURL = "https://api.github.com/users/Omkar-R-Mundhe";
const xhr = new XMLHttpRequest();//This type of request is asynchronus in nature
//thus the requst goes on in backgroudn and onreadystatechange is used to handle the response
xhr.open("GET", requestURL);

xhr.send();

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState == 4) {
    const resp = JSON.parse(this.responseText);
    console.log(resp);

    document.querySelector(".card-img-top").src = resp.avatar_url;
    document.querySelector(".card-text").innerHTML = resp.bio;
    document.querySelector(".card-title").innerHTML = resp.name;

    document.querySelector(".btn-primary").href = resp.html_url;
  }
};
