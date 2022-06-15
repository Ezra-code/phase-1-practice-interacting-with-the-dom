let countEl = document.getElementById("counter")
let count = 0
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const like = document.getElementById("heart")
const pause = document.getElementById("pause")
const btn = document.getElementById("submit")
const isPause = false
let sum = setInterval(increaseCount, 1000)
function increaseCount(){
    count++
    countEl.innerHTML = count
    return count
    
}
minus.addEventListener("click", ()=>{
        count--
        countEl.innerHTML = count
        return count
})

plus.addEventListener("click", ()=>{
    count++
    countEl.innerHTML = count
})

like.addEventListener("click", ()=>{
  const likeEl = document.querySelector(".likes")
  const li = document.createElement("li")
  console.log(count)
  li.innerHTML = `${count} has been liked 1 time`
  likeEl.appendChild(li)

})
pause.innerHTML = "pause"

pause.addEventListener("click", ()=>{
   if(pause.innerHTML == "pause"){
    clearInterval(sum)
    pause.innerHTML = "resume" 
    minus.disabled = true
    plus.disabled =true
    like.disabled = true
    btn.disabled = true
   }else{
    pause.innerHTML = "pause" 
    minus.disabled = false
    plus.disabled =false
    like.disabled = false
    btn.disabled = false
    setInterval(increaseCount, 1000)
   }

})
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const comment = document.querySelector("#list")
    const input = document.querySelector("#comment-input").value
    const p = document.createElement("p")
    p.innerHTML = input
    comment.appendChild(p)
    document.querySelector("form").reset()
    console.log(input)
})
