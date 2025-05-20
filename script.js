let a = ['olma', 'tarbuz', 'gilos', 'kiwi']

alert(a)

let n = confirm('soz qoshasizmi?')


if(n == true){
    a.push('mandarin')
    alert(a)
}else{
    a.pop()
    alert(a)
}