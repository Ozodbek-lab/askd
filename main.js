

const ism = prompt("string typidagi ma'lumot kiriting")

const familya = Number(prompt("number typidagi ma'lumot kiriting"))

const yosh = Boolean(prompt("boolean typida ma'lumot kiriting"))

const malumotingiz = confirm("hamma ma'lumotlaringiz to'g'ri kiritilganligiga ishonchingiz komilmi")

alert("siz kiritgan " + ism + " so'zi " + typeof ism + " typiga tegishli\n" +
     "siz kiritgan " + familya + " so'zi " + typeof familya + " typiga tegishli\n" +
     "siz kiritgan " + yosh + " so'zi " + typeof yosh + " typiga tegishli\n"
)