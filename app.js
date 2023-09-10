const result = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const share = document.getElementById("share");
const multiply = document.getElementById("multiply");
const percent = document.getElementById("percent");
let action = "+";
plus.onclick = function () {
  action = "+";
};
minus.onclick = function () {
  action = "-";
};
share.onclick = function () {
  action = "÷";
};
multiply.onclick = function () {
  action = "*";
};
percent.onclick = function () {
  action = "%";
};

function color(cost, x) {
  if (x > 0) {
    cost.style.color = "green";
  } else {
    cost.style.color = "red";
  }
}

function resultFunction(inp1, inp2) {
  if (action == "+") {
    const predres = Number(inp1.value) + Number(inp2.value);
    color(result, predres);
    result.textContent = predres;
  } else if (action == "-") {
    const predres = Number(inp1.value) - Number(inp2.value);
    color(result, predres);
    result.textContent = predres;
  } else if (action == "÷") {
    const predres = Number(inp1.value) / Number(inp2.value);
    color(result, predres);
    result.textContent = predres;
  } else if (action == "*") {
    const predres = Number(inp1.value) * Number(inp2.value);
    color(result, predres);
    result.textContent = predres;
  } else {
    const predres = (Number(inp1.value) * Number(inp2.value))/100;
    color(result, predres);
    result.textContent = predres;
  }
}

submitBtn.onclick = function () {
  resultFunction(input1, input2);
};
