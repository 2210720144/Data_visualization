//这里我们需要编写两个函数
//一个函数用于将尺 和 寸转化为厘米的函数
//另一个函数用于将厘米转化为尺 和 寸的函数
//注：1尺为33.33厘米，1寸为3.33厘米，1尺为10寸

function ChiCun_ToCm()
{
    const chi = document.getElementById('Chi').value;  //读取用户输入的数据
    const cun = document.getElementById('Cun').value;  //读取用户输入的数据
    const cm = chi * 33.33 + cun * 3.33;
    document.getElementById('result_Cm').textContent = cm.toFixed(2);
}
//注：toFixed是一个方法，可以将数值转化为字符串，并且可以指定保留多少位的小数

function Cm_ToChiCun()
{
    const cm = parseFloat(document.getElementById('Cm').value);  //先是读取用户输入的数值，再转化为浮点数
    let chi = Math.round(cm / 33.33);          //计算出尺的数值
    let cun = (cm % 33.33) / 3.33  //计算出寸的数值
    //注意：上面的数值都要取约值，因为从厘米转化为 尺 和 寸 的数值时涉及到除法，电脑会自动向下取整，导致结果不符合我们的预期
    document.getElementById('result_Chi').textContent = chi.toFixed(3);
    document.getElementById('result_Cun').textContent = cun.toFixed(3);
}
