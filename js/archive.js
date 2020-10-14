function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}

function equal() {
    var exp = document.form.textview.value;
    if(exp);
    document.form.textview.value = eval(exp);
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var aux = document.form.textview.value;
    document.form.textview.value = aux.slice(0, -1);
}