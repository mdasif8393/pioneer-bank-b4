
document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('deposit-area').style.display = 'block';
    document.getElementById('login-area').style.display = 'none';
});

document.getElementById('deposit-button').addEventListener('click', function() {
    let depositInput = parseFloat(document.getElementById('deposit-input').value);
    let depositShow = parseFloat(document.getElementById('deposit-show').innerText);
    let totalDepost = depositInput + depositShow;
    document.getElementById('deposit-show').innerText= totalDepost;
    let balanceShow = parseFloat(document.getElementById('balance-show').innerText);
    let totalBalance = balanceShow + depositInput;
    document.getElementById('balance-show').innerText = totalBalance;
    document.getElementById('deposit-input').value = "";
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    let withdrawInput = parseFloat(document.getElementById('withdraw-input').value);
    let withdrawShow = parseFloat(document.getElementById('withdraw-show').innerText);
    let totalWithdraw = withdrawInput + withdrawShow;
    document.getElementById('withdraw-show').innerText = totalWithdraw;
    let balanceShow = parseFloat(document.getElementById('balance-show').innerText);
    let totalBalance = balanceShow - withdrawInput;
    document.getElementById('balance-show').innerText = totalBalance;
    document.getElementById('withdraw-input').value = "";
});