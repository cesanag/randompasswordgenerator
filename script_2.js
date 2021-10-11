let gq636bgmv0 = document.getElementById('generate')
let r4q8v29blr = document.getElementById('password')

gq636bgmv0.addEventListener('click', function() {
  const pzlafvm08n = (rofh29qf5g) => {
    const value = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z',1,2,3,4,5,6,7,8,9,0]
    return value[Math.floor(Math.random() * rofh29qf5g)]}
  
  const d1r93ms653 = () => {
    const rst1ba3n1b = []
    for (let i = 0; i < 10; i++) {
        rst1ba3n1b.push(pzlafvm08n(31))}
    return rst1ba3n1b}
  
  let m9an2z6v97 = d1r93ms653().join("")
    pzlafvm08n(2)
    r4q8v29blr.value = m9an2z6v97
    r4q8v29blr.classList.remove('pass-button-clicked')
})

r4q8v29blr.addEventListener('click', function() {
    r4q8v29blr.classList.add('pass-button-clicked')
    r4q8v29blr.select();
    document.execCommand("copy");
    r4q8v29blr.value = "Copied"
})

